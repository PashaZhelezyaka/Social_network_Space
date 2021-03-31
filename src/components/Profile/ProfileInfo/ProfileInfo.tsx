import React from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {UserPropsType} from "../ProfileContainer";
import {UserProfileType} from "../../../redux/Profile-reducer";

type PropsType = {
    profile: UserProfileType
}
export function ProfileInfo(props: PropsType) {
    debugger

    return (<div className={p.profileInfo}>
            <div className={p.img}>
                 {/*<img src='https://i.pinimg.com/originals/e9/2f/03/e92f03ace41d591e3c3f7454105dcffb.jpg'
                 alt="space"/>*/}

            </div>
            <div className={p.description}>
                <img src={props.profile.photos.large}  />

            </div>

        </div>
    )
}

