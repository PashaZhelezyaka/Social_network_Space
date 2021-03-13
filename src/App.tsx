import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialog} from "./components/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Settings/Setting";
import {
    ActionsTypes,
    AddMessageTextActionType,
    AddPostTextActionType,
    StateType, StoreType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "./redux/Store";
import {DialogContainer} from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";

/*type StateAppType={
    //state: StoreType
    //store: StoreType
    //addPostText: (newPostText: string) => void // newMessageText был тут
    //updateNewPostText: (newPostText: string) =>void
    //updateNewMessageText: (newMessageText: string) => void
    //addMessageText: (newMessageText: string) =>void
    //dispatch: (action:ActionsTypes)=> void
}*/

export function App(/*props: StateAppType*/) {


    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile //store={props.state}
                                                                    //dispatch={props.dispatch}
                    />}/>
                    <Route path={'/dialog'} render={() => <DialogContainer //store={props.state}
                                                                  //dispatch={props.dispatch}

                    />} />
                    <Route path={'/users'} render={() => <UsersContainer />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Setting/>}/>
                </div>
            </div>

    );

}

export default App;