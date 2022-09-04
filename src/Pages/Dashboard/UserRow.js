import React from 'react';
import { toast } from 'react-toastify';
// import {CgDanger} from 'react-icons/cg';

const UserRow = ({user, refetch}) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://blooming-stream-16978.herokuapp.com/user/admin/${email}`, {
            method: 'PUT'
            
        })
        .then(res => res.json())
        .then(data => {
            refetch();
                    toast.success(`Successfully made an admin`)
            
        })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs border-emerald-400 text-emerald-600 bg-transparent">Make Admin</button>}</td>
            <td><button className="btn btn-xs border-red-500 bg-transparent text-red-600">Remove User </button></td>
        </tr>
    );
};

export default UserRow;