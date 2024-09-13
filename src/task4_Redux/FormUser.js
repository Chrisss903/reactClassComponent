import React, { useState } from 'react';
import './Form.css'
import { useDispatch } from 'react-redux';
import { setUser } from './Slice';

export default function FormUser() {

    const dispatch = useDispatch();

    const [UserInfo, setUserInfo] = useState({
        Name: "",
        Age: "",
        Email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserInfo({
            ...UserInfo,
            [name]: value
        })
    }

    const displayName = (e) => {

        e.preventDefault();
        dispatch(setUser(UserInfo))

    }




    return (
        <form className='FormOuter'>
            <label>Name:</label>
            <input name='Name' type='text' value={UserInfo.Name} onChange={handleChange} />
            <label>Age:</label>
            <input name='Age' type='text' value={UserInfo.Age} onChange={handleChange} />
            <label>Email:</label>
            <input name='Email' type='text' value={UserInfo.Email} onChange={handleChange} />
            <button type="submit" onClick={displayName}>ADD USER</button>

        </form>
    )


}
