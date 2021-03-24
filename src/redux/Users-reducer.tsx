import {ActionsTypes} from "./Store";

type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}

export type initialStateType = {
    users: Array<UserType>
}

const initialState: initialStateType = {
    users: []
}


const usersReducer = (state: initialStateType = initialState,
                      action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        }

        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state
    }
}

    export const followAC = (userID: number) => {
        return {type: "FOLLOW", userID}
    }
    export const unfollowAC = (userID: number) => {
        return {type: "UNFOLLOW", userID}
    }
    export const setUserAC = (users: Array<UserType>) => {
        return {type: "SET-USERS", users}
    }


    export default usersReducer