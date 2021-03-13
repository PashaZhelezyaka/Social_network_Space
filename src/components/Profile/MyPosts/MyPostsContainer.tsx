import React from "react";
import {
    ActionsTypes,
    PostPageType, StoreType,
} from "../../../redux/Store";
import {
    addPostAC,
    upDateNewPostTextAC
} from "../../../redux/Profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dialog} from "../../Dialog/Dialog";
import {
        initialStateType,
    } from "../../../redux/Profile-reducer";
import {Dispatch} from "redux";
import {AppStateReducer} from "../../../redux/Redux-store";

    //store: StoreType
    //addPostText: (newPostText: string) => void
    //updateNewPostText: (newPostText: string) => void
    //dispatch: (action: ActionsTypes) => void


/*export function MyPostsContainer(props: MyPostsContainerPropsType) {

    return (
        <StoreContext.Consumer>
            {(store) => {
            let state = store.getState().postPage

            let addPost = () => {
                store.dispatch(addPostAC(
                    store.getState().postPage.newPostText))
                //(props.state.newPostText);
            }
            const newChangeText = (text: string) => {
                store.dispatch(upDateNewPostTextAC(text))
                //(e.currentTarget.value);
            }
            return <MyPosts state={store.getState().postPage}
                            upDateNewPostText={newChangeText}
                            addPost={addPost}
                /!*posts={state.postPage.postData}*!/ /!*newPostText = {state.postPage.newPostText}*!/ />
        }}
        </StoreContext.Consumer>
    )
}*/

type MapStatePropsType = {
    postsPage: initialStateType
}

type mapDispatchPropsType = {
    addPostAC: (postText: string)=> void
    upDateNewPostTextAC: (text: string)=> void
}

export type PostsType = MapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateReducer):MapStatePropsType=> {
    return {
        //posts: state.postPage.posts,
        //newPostText: state.postPage.newPostText
        postsPage: state.postPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType=> {
    return {
        addPostAC: (postText) => {
            dispatch(addPostAC(postText /*store.getState().postPage.newPostText*/))
        },
        upDateNewPostTextAC: (text)=> {
            dispatch(upDateNewPostTextAC(text))
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



