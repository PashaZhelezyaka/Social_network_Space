import m from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post"
import {
    ActionsTypes,
    PostDataType,
    PostPageType,
} from "../../../redux/Store";
import {
    addPostAC, PostType,
    upDateNewPostTextAC
} from "../../../redux/Profile-reducer";
import {PostsType} from "./MyPostsContainer";

/*type MyPostsPropsType = {
    state: PostPageType
    //addPostText: (/!*newPostText: string*!/) => void
    upDateNewPostText: (/!*newPostText*!/text: string) => void
    //dispatch?: (action: ActionsTypes) => void
    //upDateNewPostText: (text: string)=> void
    addPost: ()=> void
    //newPostText: string
    //posts: Array<PostDataType>

}*/


export function MyPosts(props: PostsType) {

    const posts = props.postsPage.posts.map(p => <Post message={p.message}
                                                   likesCount={p.likesCount}/>)

    let onAddPost = () => {
        props.addPostAC(props.postsPage.newPostText)
    }

    const newChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.upDateNewPostTextAC(text)

    }


    return (
        <div className={m.myPost}>
            <div>
                <textarea onChange={newChangeText}
                          value={props.postsPage.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}> Add Post</button>
            </div>
            <div>
                <h3>My posts </h3>
            </div>
            <div>
                {posts}
            </div>


        </div>
    )
}


