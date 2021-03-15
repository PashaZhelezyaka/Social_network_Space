import React from 'react'
import styles from './Users.module.css'
import {UsersType} from './UsersContainer'
import axios from "axios";
import usersPhoto from './images/users.png'

export class UsersC extends React.Component<UsersType, any> {

    constructor(props: any) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}> unfollow </button>
                                : <button onClick={() => this.props.follow(u.id)}> follow </button>}

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
}

