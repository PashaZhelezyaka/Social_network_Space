import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostPageType, StoreType} from "../../redux/Store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
type ProfilePropsType={
    //store: StoreType                   //PostPageType
    //addPostText: (newPostMessage: string) => void
    //updateNewPostText: (newPostText: string) =>void
    //dispatch: (action: ActionsTypes)=> void
}
export function Profile(props: ProfilePropsType ) {

    return <div className={s.profile}>
        <ProfileInfo/>
        <MyPostsContainer /*store = {props.store }*/ //dispatch ={props.dispatch}
                 /*updateNewPostText={props.updateNewPostText}*/ />
    </div>
}

