import React from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {OneUserPropsType} from "../ProfileContainer";
import {UserProfileType} from "../../../redux/Profile-reducer";
import {StatusProfile} from './StatusProfile';

type PropsType = {
    profile: UserProfileType
}

export function ProfileInfo(props: PropsType) {

    return (<div className={p.profileInfo}>
            <div className={p.description}>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                <StatusProfile status={'CosmoStar'}/>
            </div>
        </div>
    )
}

