import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect( () => {
        const email = user.email;
        const url = `https://quiet-garden-90243.herokuapp.com/myitems?email=${email}`
        fetch(url, {
            method: 'GET',
            // headers: {
            //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => {
            console.log('res', res);
            if(res.status === 401 || res.status === 403){
                navigate('/');
                // signOut(auth);
                // localStorage.removeItem('accessToken');
            }
            return res.json()
        })
        .then(data => {
            setMyOrders(data);
        });
          
    }, [user]);

    

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?");
        if (proceed) {
          const url = `https://quiet-garden-90243.herokuapp.com/order/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = myOrders.filter((product) => product._id !== id);
              setMyOrders(remaining);
            });
        }
      };
    console.log(myOrders);
    return (
        <div>
            <div className="overflow-x-auto mt-16">
                <table className="table w-full md:w-9/12 mx-10">
                    <thead>
                        <tr>
                            {/* <th>Name</th> */}
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Pay Order</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
      {
          myOrders.map(myorder => <tr>
                  {/* <td>{myorder.name}</td> */}
                  <td>{myorder.email}</td>
                  <td className='font-bold'>{myorder.productName}</td>
                  <td>{myorder.order} Pc.</td>
                  <td> {(myorder.price && !myorder.paid) && <Link to={`/dashboard/payment/${myorder._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                  {(myorder.price && myorder.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{myorder.transactionId}</span></p>
                                    </div>}
                  </td>
                  {/* {myorder.paid ===  <td><button onClick={() => handleDelete(myorder._id)} className="btn btn-error btn-xs" disabled>Cancel</button></td>} */}
                    {(myorder.paid !== <td><button onClick={() => handleDelete(myorder._id)} className="btn btn-error btn-xs">Cancel</button></td>) && !myorder.paid && <td><button onClick={() => handleDelete(myorder._id)} className="btn btn-error btn-xs">Cancel</button></td>}
                  
                  
                
          </tr>)
      }
      
    </tbody>

    </table>
            </div>
        </div>
    );
};

export default MyOrders;