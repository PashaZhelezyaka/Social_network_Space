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
import {StateType} from "./redux/State";

type StateAppType={
    state: StateType
    addPostText: (newPostText: string) => void // newMessageText был тут
    updateNewPostText: (newPostText: string) =>void
    updateNewMessageText: (newMessageText: string) => void
    addMessageText: (newMessageText: string) =>void
}

export function App(props: StateAppType) {


    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile state={props.state.postPage}
                                                                    addPostText={props.addPostText}
                                                                    updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path={'/dialog'} render={() => <Dialog state={props.state.dialogPage}
                                                                  addMessageText={props.addMessageText}
                                                                  updateNewMessageText={props.updateNewMessageText}
                    />} />
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Setting/>}/>
                </div>
            </div>

    );

}

export default App;