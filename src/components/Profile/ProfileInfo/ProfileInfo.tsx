import React from 'react';
import p from './ProfileInfo.module.css'


export function ProfileInfo() {
    return (<div className={p.profileInfo}>
            <div className={p.img}>
               {/* <img src='https://i.pinimg.com/originals/e9/2f/03/e92f03ace41d591e3c3f7454105dcffb.jpg' alt="space"/>*/}
            </div>
            <div className={p.description}>
                ava + description
            </div>

        </div>
    )
}

