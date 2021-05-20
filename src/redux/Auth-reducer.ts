import {
    ActionsTypes,
    setUserAuthDataActionType
} from "./StoreTypes";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATE = "SET_USER_DATE"

export type DataDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type authDataType = {
    data: DataDataType
    isAuth: boolean
    resultCode: number | null
    messages: Array<string> | Array<null>
}

const initialState = {
    data: {id: null, email: null, login: 'Authorized', isAuth: false},
    isAuth: false,
    resultCode: null,
    messages: []
}

const authReducer = (state: authDataType = initialState, action: ActionsTypes): authDataType => {

    switch (action.type) {
        case SET_USER_DATE: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null,
                                isAuth: boolean):
    setUserAuthDataActionType => {
    return {
        type: "SET_USER_DATE",
        payload: {id, email, login, isAuth}
    }
}
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const LoginTC = (email: string, password: string, rememberMe: boolean = false) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe).then((res) => {
            if (res.data.resultCode === 0) {
                getAuthUserData()
            }
        })
    }
}

export const LogoutTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout().then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer