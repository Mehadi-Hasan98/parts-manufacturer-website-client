import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect( () => {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [user]);

    

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?");
        if (proceed) {
          const url = `http://localhost:5000/order/${id}`;
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
                <table className="table w-full">
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
                  <td>{myorder.productName}</td>
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