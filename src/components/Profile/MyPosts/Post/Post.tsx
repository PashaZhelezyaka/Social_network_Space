import m from "./Post.module.css";
import React from "react";

type MassageType = {
    message: string
    likesCount: string
}

export function Post(props: MassageType) {
    return (
        <div className={m.item}>
            <div>
                <img
                    src='https://frigato.ru/uploads/posts/2017-04/thumbs/1493547785_screen-shot-2015-10-01-at-9.31.57-pm.png'
                    alt="avatar"/>
            </div>
            <div>
                {props.message}
                <div>
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
}

