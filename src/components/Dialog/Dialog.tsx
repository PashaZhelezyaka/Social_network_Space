import React from "react";
import d from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogName} from "./DialogName/DialogName";
import {DialogType} from "./DialogContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddMessageFormType = {
    newMessageText: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newMessageText"} component={"textarea"}/>
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)

function Dialog(props: DialogType) {

    let state = props.dialogPage

    const names = state.dialogNames.map(d => <DialogName
        id={d.id} key={d.id} name={d.name}/>)
    const message = state.messages.map(m => <Message message={m.message}/>)

    let addNewMessage = (values: AddMessageFormType) => {
        props.addMessage(values.newMessageText)

    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                {names}
            </div>
            <div className={d.messages}>
                {message}
            </div>
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialog;