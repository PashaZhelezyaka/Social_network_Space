import React from "react";
import d from './../Dialog.module.css'



type MessageType = {
    message: string
}

export function Message(props: MessageType) {
    return (
        <div className={d.message}>
            <span><img src="https://c0.klipartz.com/pngpicture/114/364/gratis-png-superman-logo-pixel-art-batman-superman.png" />
            </span>
            {props.message}
        </div>

    )
}




