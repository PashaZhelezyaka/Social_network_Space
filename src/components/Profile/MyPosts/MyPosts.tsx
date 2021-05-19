import m from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post"
import {PostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type AddPostFormType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10)
export const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={"Add Post"}
                       name={"newPostText"} validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button> Add Post</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm<AddPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export function MyPosts(props: PostsType) {

    const posts = props.postsPage.posts.map(p => <Post message={p.message}
                                                       likesCount={p.likesCount}/>)

    let onAddPost = (values: AddPostFormType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={m.myPost}>
            <PostReduxForm onSubmit={onAddPost}/>
            <div>
                <h3>My posts </h3>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}



