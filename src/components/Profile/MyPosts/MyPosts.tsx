import m from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post"
import {PostDataType, PostPageType} from "../../../redux/State";

type MyPostsPropsType = {
    state: PostPageType
    addPostText: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void


}

export function MyPosts(props: MyPostsPropsType) {

    const posts = props.state.postData.map(p => <Post message={p.message}
                                                       likesCount={p.likesCount}/>)

        let addPost = () => {
        props.addPostText(props.state.newPostText);


    }
    const newChangeText = (e:ChangeEvent<HTMLTextAreaElement>) =>
        props.updateNewPostText(e.currentTarget.value);



return (
    <div className={m.myPost}>
        <div>
                <textarea onChange={newChangeText}
                          value={props.state.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}> Add Post</button>
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


