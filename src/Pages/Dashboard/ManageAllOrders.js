import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto mt-16 mb-20">
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
            {allOrders.map((myorder) => (
              <tr>
                <td>{myorder.name}</td>
                <td>{myorder.email}</td>
                <td className="font-bold">{myorder.productName}</td>
                <td> {(myorder.price && !myorder.paid) && <div className="mb-2">
                                        <button className='btn btn-xs bg-slate-800 btn-outline text-zinc-100 font-semibold mb-2'>unpaid</button>
                                        <div>
                                        <button className="btn btn-error btn-xs">Cancel</button>
                                        </div>
                                        
                                    </div>}
                  {(myorder.price && myorder.paid) && <div>
                                        <button className='btn btn-xs bg-secondary btn-outline text-zinc-800 font-semibold'>pending</button>
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
