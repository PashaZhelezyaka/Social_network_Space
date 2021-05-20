import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {LoginTC} from "../../redux/Auth-reducer";
import {AppStateReducer} from "../../redux/Redux-store";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type MapDispatchPropsType = {
    LoginTC: (email: string, password: string, rememberMe: boolean) => void
}
type MapStatePropsType = {
    isAuth: boolean
}

type LoginPropsType = MapDispatchPropsType & MapStatePropsType

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"email"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input}
                       validate={[required]} type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button> Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const MapStateToProps = (state: AppStateReducer): MapStatePropsType => {
    return ({
        isAuth: state.auth.isAuth
    })
}

function Login(props: LoginPropsType) {
    const onSubmit = (formData: FormDataType) => {
        props.LoginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(MapStateToProps, {LoginTC})(Login)