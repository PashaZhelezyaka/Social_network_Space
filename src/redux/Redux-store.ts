import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import sidebarReducer from "./Sidebar-reducer";

let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogReducer,
    sidebar:  sidebarReducer,
})
let store = createStore(reducers)

export default store