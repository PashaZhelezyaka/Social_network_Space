import React from "react";

import {
    addPost,
    upDateNewPostText
} from "../../../redux/Profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {
    initialStateType,
} from "../../../redux/Profile-reducer";
import {Dispatch} from "redux";
import {AppStateReducer} from "../../../redux/Redux-store";

type MapStatePropsType = {
    postsPage: initialStateType
}

type mapDispatchPropsType = {
    addPost: (postText: string) => void
    upDateNewPostText: (text: string) => void
}

export type PostsType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return {
        postsPage: state.postPage
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: (postText) => {
            dispatch(addPost(postText))
        },
        upDateNewPostText: (text) => {
            dispatch(upDateNewPostText(text))
        }

    }
}*/

export const MyPostsContainer = connect(mapStateToProps, {
    addPost, upDateNewPostText,})(MyPosts)



