import React from 'react'
import { useParams } from 'react-router-dom'

function User2() {

    const { Userinfo } = useParams();
    return (
        <h1>User:{Userinfo}</h1>
    )
}

export default User2
