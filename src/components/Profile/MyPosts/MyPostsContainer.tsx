import React from "react";

import {addPostAC, initialStateType} from "../../../redux/Profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateReducer} from "../../../redux/Redux-store";

type MapStatePropsType = {
    postsPage: initialStateType
}

type mapDispatchPropsType = {
    addPost: (postText: string) => void
}

export type PostsType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return {
        postsPage: state.postPage
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost: addPostAC})(MyPosts)



