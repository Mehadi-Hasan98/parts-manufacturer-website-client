import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const reverse = [...allOrders].reverse();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://quiet-garden-90243.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = allOrders.filter((product) => product._id !== id);
          setAllOrders(remaining);
          toast('Item canceled');
        });
    }
  };

  useEffect(() => {
    fetch("https://quiet-garden-90243.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);


  const handleUpdateStatus = (id)=>{
    fetch(`https://quiet-garden-90243.herokuapp.com/order/shipped/${id}`,{
      method: 'PUT'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast('Order Shipped Successfully!');
    }) 
  }


  return (
    <div>
      <div className="overflow-x-auto mt-16 mb-20 mx-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Pay Order</th>
              {/* <th>Cancel Order</th> */}
            </tr>
          </thead>
          <tbody>
            {
            reverse.map((myorder) => (
              <tr>
                <td>{myorder.name}</td>
                <td>{myorder.email}</td>
                <td className="font-bold">{myorder.productName}</td>
                <td> {(myorder.price && !myorder.paid) && <div className="mb-2">
                                        <button className='btn btn-xs bg-slate-800 btn-outline text-zinc-100 font-semibold mb-2'>unpaid</button>
                                        <div>
                                        <button onClick={() => handleDelete(myorder._id)} className="btn btn-error btn-xs">Cancel</button>
                                        </div>
                                        
                                    </div>}
                  {(myorder.price && myorder.paid) && <div>
                                        <button onClick={()=> handleUpdateStatus(myorder._id)} className='btn btn-xs bg-secondary btn-outline text-zinc-800 font-semibold'>{myorder.paid}</button>
                                    </div>}
                  </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
