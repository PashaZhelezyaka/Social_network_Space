import React from 'react'
import styles from './Users.module.css'
import { UsersType } from './UsersContainer'


export function Users(props: UsersType) {
    if (props.usersPage.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: 'https://m.sobaka.ru/system/inline_image/image/00/00/87/28/base_1122.jpg',
                followed: true,
                fullName: "Pavel P.",
                status: "developer",
                location: {city: "Turow", country: "Belarus"}
            },
                {
                    id: 2,
                    photoUrl: 'https://m.sobaka.ru/system/inline_image/image/00/00/87/28/base_1122.jpg',
                    followed: true,
                    fullName: "Bob P.",
                    status: "developer",
                    location: {city: "Turow", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: 'https://m.sobaka.ru/system/inline_image/image/00/00/87/28/base_1122.jpg',
                    followed: true,
                    fullName: "Din P.",
                    status: "developer",
                    location: {city: "Turow", country: "Belarus"}
                },
                {
                    id: 4,
                    photoUrl: 'https://m.sobaka.ru/system/inline_image/image/00/00/87/28/base_1122.jpg',
                    followed: false,
                    fullName: "Sam P.",
                    status: "developer",
                    location: {city: "Turow", country: "Belarus"}
                },
                {
                    id: 5,
                    photoUrl: 'https://m.sobaka.ru/system/inline_image/image/00/00/87/28/base_1122.jpg',
                    followed: false,
                    fullName: "Nick P.",
                    status: "developer",
                    location: {city: "Turow", country: "Belarus"}
                },
                {
                    id: 6,
                    photoUrl: 'https://m.sobaka.ru/system/inline_image/image/00/00/87/28/base_1122.jpg',
                    followed: false,
                    fullName: "Mike P.",
                    status: "developer",
                    location: {city: "Turow", country: "Belarus"}
                },]
        )
    }
    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.usePhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}> unfollow </button>
                                : <button onClick={() => props.follow(u.id)}> follow </button>}

                        </div>
                    </span>
                        <span>
                            <span>
                                <div> {u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )

            }
        </div>
    )
}