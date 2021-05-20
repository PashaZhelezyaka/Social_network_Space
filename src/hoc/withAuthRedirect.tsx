import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateReducer} from "../redux/Redux-store";
import {connect} from "react-redux";

type MapStatePropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateReducer): MapStatePropsForRedirectType => {
    return ({
        isAuth: state.auth.isAuth
    })
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsForRedirectType) {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T} />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}