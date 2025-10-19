import React, { useEffect, useState } from "react";
import apiClientInterceptor from "../../services/apiClientInterceptor";

const Order = () => {
  const [orders, setOrders] = useState([]);
  
      useEffect(() => {
        apiClientInterceptor.get('/orders/').then(res => setOrders(res.data.results));
      }, [])


  return (
    <div>
      <div className="mt-6 card bg-base-100 shadow-sm mb-9">
        <div className="card-body">
          <h3 className="card-title text-lg">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                <tr>
                  <td>{order.id}</td>
                  <td>{order.user.name}</td>
                  <td>
                    <div className="badge badge-success">{order.status}</div>
                  </td>
                  <td>{order.created_at}</td>
                  <td>{order.total_price}</td>
                </tr>

                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
