import React from 'react';
import styles from './Users.module.css';
import usersPhoto from './../../assets/images/users.png';
import {toggleFollowingProgress, UsersPropsType} from '../../redux/Users-reducer';
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {unfollowUsersAPI, followUsersAPI} from "../../api/api";

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
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.toggleFollowingProgress(true, u.id)
                                              unfollowUsersAPI.getFollow(u.id)
                                                  .then(data => {
                                                      if (data.resultCode == 0) {
                                                          props.unfollow(u.id)
                                                      }
                                                      props.toggleFollowingProgress(false, u.id)

                                                  })

                                          }}

                                > unfollow </button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.toggleFollowingProgress(true, u.id)
                                              followUsersAPI.getFollow(u.id)
                                                  .then(data => {
                                                      if (data.resultCode == 0) {
                                                          props.follow(u.id)
                                                      }
                                                      props.toggleFollowingProgress(false, u.id)
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