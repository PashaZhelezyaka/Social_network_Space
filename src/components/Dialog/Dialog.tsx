import React, {ChangeEvent} from "react";
import d from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogName} from "./DialogName/DialogName";
import {DialogType} from "./DialogContainer";

/*type DialogPropsType ={
    //state: DialogPageType
    //updateNewMessageText: (newMessageText: string) => void
    //addMessageText: (newMessageText: string) =>void
    //dispatch: (action:ActionsTypes)=>void
    dialogPage:
    upDateNewMessageTextAC: (text: string) => void
    addMessageAC: ()=>void
    }*/


export function Dialog(props: DialogType ) {

 let state = props.dialogPage

    const names = state.dialogNames.map(d => <DialogName id={d.id} key={d.id} name={d.name}/>)
    const message = state.messages.map(m => <Message /*key={d.id}*/ message={m.message}/>)

    let addMessage = ()=> {
        props.addMessageAC (props.dialogPage.newMessageText /*props.state.newMessageText*/)
        /*props.addMessageText(props.state.newMessageText)*/
    }

    const newMessageChangeText = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let text = e.currentTarget.value
        props.upDateNewMessageTextAC(text)
        }
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
            <button onClick={addMessage}>send message</button>
            <textarea placeholder={"Enter your message"}
                      onChange={newMessageChangeText} value={state.newMessageText}/>


        </div>
    )

}