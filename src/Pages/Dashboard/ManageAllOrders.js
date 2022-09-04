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
      <div className="overflow-x-auto mx-10 mt-16">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Pay Order</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((myorder) => (
              <tr>
                <td>{myorder.name}</td>
                <td>{myorder.email}</td>
                <td>{myorder.productName}</td>
                <td>
                  <button className="btn btn-success btn-xs">Pay</button>
                </td>
                <td>
                  <button className="btn btn-error btn-xs">Cancel</button>
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
