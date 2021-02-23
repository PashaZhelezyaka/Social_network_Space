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
    StateType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "./redux/State";

type StateAppType={
    state: StateType
    //addPostText: (newPostText: string) => void // newMessageText был тут
    //updateNewPostText: (newPostText: string) =>void
    //updateNewMessageText: (newMessageText: string) => void
    //addMessageText: (newMessageText: string) =>void
    dispatch: (action:ActionsTypes)=> void
}

export function App(props: StateAppType) {


    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile state={props.state.postPage}
                                                                    dispatch={props.dispatch}
                    />}/>
                    <Route path={'/dialog'} render={() => <Dialog state={props.state.dialogPage}
                                                                  dispatch={props.dispatch}

                    />} />
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Setting/>}/>
                </div>
            </div>

    );

}

export default App;