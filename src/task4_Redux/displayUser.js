// DisplayUser.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delUser } from './Slice';
import './Form.css'

function DisplayUser() {


    const users1 = useSelector((state) => state.userSlice.users)
    const dispatch = useDispatch();

    return (
        <ul>
            {users1.map((users, index) => (

                <div className='displayName'>
                    <li key={index}> {index + 1} . {users.Name} - {users.Age} - {users.Email}
                    </li>

                    <button onClick={() => { dispatch(delUser(index)) }}>Delete Name</button>
                </div>
            ))}
        </ul>
    );
}

export default DisplayUser;
