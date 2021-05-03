import React, {ChangeEvent} from "react";
import d from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogName} from "./DialogName/DialogName";
import {DialogType} from "./DialogContainer";

export function Dialog(props: DialogType) {

    let state = props.dialogPage

    const names = state.dialogNames.map(d => <DialogName
        id={d.id} key={d.id} name={d.name}/>)
    const message = state.messages.map(m => <Message message={m.message}/>)

    let addMessage = () => {
        props.addMessage(props.dialogPage.newMessageText)
    }

    const newMessageChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.upDateNewMessageText(text)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                {names}
            </div>
            <div className={d.messages}>
                {message}
            </div>
            <button onClick={addMessage}>send message</button>
            <textarea placeholder={"Enter your message"}
                      onChange={newMessageChangeText} value={state.newMessageText}/>
        </div>
    )
}

