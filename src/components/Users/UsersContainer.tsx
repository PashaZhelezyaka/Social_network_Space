import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/Users-reducer';
import {AppStateReducer} from '../../redux/Redux-store';
import {Dispatch} from 'redux';
import axios from 'axios';
import {Users} from './Users';
import preloader from './../../assets/images/preloader.gif';
import {Preloader} from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';


export class UsersContainer extends React.Component<UsersType, {}> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                //toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}

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
    followingInProgress: Array<number>

}
type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
   // toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    })
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching,
    toggleFollowingProgress, getUsers
})(UsersContainer)