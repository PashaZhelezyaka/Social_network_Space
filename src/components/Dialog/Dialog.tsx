import React from "react";
import d from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogName} from "./DialogName/DialogName";
import {DialogType} from "./DialogContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

type AddMessageFormType = {
    newMessageText: string
}
const maxLength100 = maxLengthCreator(100)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newMessageText"} component={Textarea}
                       validate={[required, maxLength100]}/>
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