import React from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {OneUserPropsType} from "../ProfileContainer";
import {UserProfileType} from "../../../redux/Profile-reducer";

type PropsType = {
    profile: UserProfileType
}
export function ProfileInfo(props: PropsType) {

    return (<div className={p.profileInfo}>
            <div className={p.imgTop}>
                 {/*{<img src='https://delo.ua/files/news/images/3462/70/picture2_ukraina-ty-prosto_346270_p0.jpg'
                 alt="space"/>}*/}

            </div>
            <div className={p.description}>
                <img src={props.profile.photos.large}  />

            </div>

        </div>
    )
}

