import {
    ActionsTypes,
    setUserAuthDataActionType
} from "./Store";

const SET_USER_DATE = "SET_USER_DATE"

/*export type initialStateType = typeof initialState*/

export type DataDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type authDataType = {
    data: DataDataType
    isAuth: boolean
    resultCode: number | null
    messages: Array<string> | Array<null>
}


const initialState = {
    data: {id: null, email: null, login: null},
    isAuth: false,
    resultCode: null,
    messages: []
}

const authReducer = (state: authDataType = initialState, action: ActionsTypes): authDataType => {

    switch (action.type) {
        case SET_USER_DATE: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null): setUserAuthDataActionType => {
    return {
        type: "SET_USER_DATE",
        data: {id, email, login}
    }
}


export default authReducer