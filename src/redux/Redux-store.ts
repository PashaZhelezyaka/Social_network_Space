import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";

let rootReducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})
let store = createStore(rootReducers)

export type AppStateReducer = ReturnType<typeof rootReducers>


// @ts-ignore
window.store = store


export default store