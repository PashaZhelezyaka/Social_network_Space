import m from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post"
import {PostsType} from "./MyPostsContainer";


export function MyPosts(props: PostsType) {

    const posts = props.postsPage.posts.map(p => <Post message={p.message}
                                                       likesCount={p.likesCount}/>)

    let onAddPost = () => {
        props.addPost(props.postsPage.newPostText)
    }

    const newChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.upDateNewPostText(text)

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


