import React, {ChangeEvent} from "react";
import d from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogName} from "./DialogName/DialogName";
import state, {ActionsTypes, DialogPageType} from "../../redux/State";

type DialogPropsType ={
    state: DialogPageType
    //updateNewMessageText: (newMessageText: string) => void
    //addMessageText: (newMessageText: string) =>void
    dispatch: (action:ActionsTypes)=>void
    }

export function Dialog(props: DialogPropsType) {


    const names = props.state.dialogNames.map(d => <DialogName id={d.id} name={d.name}/>)
    const message = props.state.messageData.map(m => <Message message={m.message}/>)

    let addMessage = ()=> {
        props.dispatch({type: "ADD-MESSAGE-TEXT",
            updateNewMessageText: props.state.newMessageText })
        /*props.addMessageText(props.state.newMessageText)*/
    }

    const newMessageChangeText = (e:ChangeEvent<HTMLTextAreaElement>) =>
        props.dispatch ({type: "UP-DATE-NEW-MESSAGE-TEXT",
            newMessageText: (e.currentTarget.value)})
        /*props.updateNewMessageText(e.currentTarget.value)*/

    /*let addMessages = React.createRef<HTMLTextAreaElement>()*/
    /*let messagesText = ()=>{
        /!*let text = addMessages.current?.value;
                alert (text)}*!/*/

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                {names}
            </div>
            <div className={d.messages}>
                {message}
            </div>
            <button onClick={addMessage}>Add message</button>
            <textarea onChange={newMessageChangeText} value={props.state.newMessageText}/>


        </div>
    )

}