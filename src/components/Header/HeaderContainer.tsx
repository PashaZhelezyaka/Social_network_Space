import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authDataType, DataDataType, setAuthUserData} from "../../redux/Auth-reducer";
import {AppStateReducer} from "../../redux/Redux-store";


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
    data: DataDataType

}
//isAuth={this.props.isAuth} login={this.props.login}
type mapDispatchPropsType = {
    setAuthUserData: (id: number | null,
                      email: string | null,
                      login: string | null) => void
}
export type OneUserPropsType = MapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<OneUserPropsType, {}> {
    componentDidMount(): void {
        axios.get<authDataType>(`https://social-network.samuraijs.com/api/1.0//auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)


                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.data.login,
        data: state.auth.data
    })
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

