import React from 'react'
import styles from './Users.module.css'
import {UsersType} from './UsersContainer'
import axios from "axios";
import usersPhoto from './images/users.png'


export function UsersF(props: UsersType) {
    let getUsers = () => {

        if (props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })

        }
    }
    return (

        <div>

            <button onClick={getUsers}> GetUsers </button>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}> unfollow </button>
                                : <button onClick={() => props.follow(u.id)}> follow </button>}

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