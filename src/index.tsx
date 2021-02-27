import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/Redux-store";
import{StateType, StoreType} from "./redux/Store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



 const renderEntireTree = (state: StateType) => {
    ReactDOM.render(<BrowserRouter> <App state={state}
                                         dispatch = {store.dispatch.bind(store)}

    /> </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree (store.getState());

store.subscribe ( ()=> {
    let state = store.getState()
    renderEntireTree(state)}) ;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
