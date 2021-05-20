import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {DataDataType, getAuthUserData, LogoutTC} from "../../redux/Auth-reducer";
import {AppStateReducer} from "../../redux/Redux-store";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
    data: DataDataType

}
type mapDispatchPropsType = {
    getAuthUserData: () => void
    LogoutTC: () => void
}
export type OneUserPropsType = MapStatePropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<OneUserPropsType, {}> {
    componentDidMount(): void {
        this.props.getAuthUserData()
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

export default connect(mapStateToProps, {getAuthUserData, LogoutTC})(HeaderContainer)

