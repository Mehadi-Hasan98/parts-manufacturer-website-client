import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const UserRow = ({user, refetch}) => {
   const [users, setUsers] = useState([]);

   useEffect( ()=>{
    fetch('https://quiet-garden-90243.herokuapp.com/user')
    .then(res=> res.json())
    .then(data => setUsers(data))
   }, []);


    const { email, role } = user;


    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?");
        if (proceed) {
          const url = `https://quiet-garden-90243.herokuapp.com/user/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
              refetch();
              toast.success(`User removed`);
            });
        }
      };

    const makeAdmin = () => {
        fetch(`https://quiet-garden-90243.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
            
        })
        .then(res => res.json())
        .then(data => {
            refetch();
                    toast.success(`Successfully made an admin`)
            
        })
    };


    return (
        <tr>
            <th>User - </th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="py-1 px-2 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(user._id)} className="py-1 px-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 font-mono">Remove User </button></td>
        </tr>
    );
};

export default UserRow;