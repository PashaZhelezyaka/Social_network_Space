import React from "react";
import styles from './FormsControls.module.css'


export function FormControl({input, meta, child, ...props}: any) {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? styles.formControl + " " + styles.error : ""}>
            <div>
                {props.children}
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}

export function Textarea(props: any) {
    const {input, meta, child, ...restProps} = props
    return (
        <div>
            <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
        </div>
    )
}

export function Input(props: any) {
    const {input, meta, child, ...restProps} = props
    return (
        <div>
            <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
        </div>
    )
}


