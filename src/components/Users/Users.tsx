import React from 'react';
import styles from './Users.module.css';
import usersPhoto from './../../assets/images/users.png';
import {UsersPropsType} from '../../redux/Users-reducer';
import {NavLink} from 'react-router-dom';
import axios from "axios";

export function Users(props: UsersPropsType) {

    let pageCounts = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCounts; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>

                {pages.map(p => {
                    return <span className={props.currentPage === p ?
                        styles.selectedPage : " "}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>
                        {p} </span>
                })}

            </div>

            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                                 className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                        {withCredentials: true,
                                        headers: {
                                            "API-KEY":"ea564460-4138-4503-aa33-6bc94781f7f2"}})
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        })

                                }}

                                > unfollow </button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                        {}, {withCredentials: true,
                                            headers: {
                                                "API-KEY":"ea564460-4138-4503-aa33-6bc94781f7f2"}})
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        })

                                }}


                                > follow </button>}

                        </div>
                    </span>
                        <span>
                            <span>
                                <div> {u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )

}