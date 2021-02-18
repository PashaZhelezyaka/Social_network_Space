import React from "react";
import d from './../Dialog.module.css'
import {NavLink} from "react-router-dom";


type DialogNameType = {
    id: number
    name: string
}


export function DialogName(props: DialogNameType) {
    return (
        <div className={d.dialog + ' ' + d.activeItem}>
            <NavLink to={'/dialog/' + props.id}> {props.name} </NavLink>
        </div>
    )

}




