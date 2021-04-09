import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Settings/Setting";
import {DialogContainer} from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App() {
    return (
        <div className='app-wrapper'>

            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialog'} render={() => <DialogContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Setting/>}/>
            </div>
        </div>

    );
}

export default App;