import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/Users-reducer';
import {AppStateReducer} from '../../redux/Redux-store';
import {Dispatch} from 'redux';
import axios from 'axios';
import {Users} from './Users';
import preloader from './../../assets/images/preloader.gif';
import {Preloader} from '../common/Preloader/Preloader';


export class UsersContainer extends React.Component<UsersType, any> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }


}


type MapStatePropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    })
}

/*let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(follow(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollow(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (numberPage: number) => {
            dispatch(setCurrentPage(numberPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        },
    }
}*/


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching
})(UsersContainer)