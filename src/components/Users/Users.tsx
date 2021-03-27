import React from 'react';
import styles from './Users.module.css';
import usersPhoto from './../../assets/images/users.png';
import {UsersPropsType} from '../../redux/Users-reducer';

export function Users(props: UsersPropsType) {

    let pageCounts = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCounts; i++) {
        pages.push(i)}

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