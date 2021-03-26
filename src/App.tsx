import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Settings/Setting";
import {DialogContainer} from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";


 function App() {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile />}/>
                    <Route path={'/dialog'} render={() => <DialogContainer />} />
                    <Route path={'/users'} render={() => <UsersContainer />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Setting/>}/>
                </div>
            </div>

    );

}

export default App;