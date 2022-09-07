import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Admin = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://quiet-garden-90243.herokuapp.com/user', {
        method: 'GET',
        headers: {
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        
    })
    .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-xl mt-16 font-bold font-mono text-rose-600'>For Admin Purpose Only</h2>
            <div className="overflow-x-auto mt-10 mb-20 mx-28">
                <table className="table w-full border rounded">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;