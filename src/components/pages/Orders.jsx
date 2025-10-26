import { useEffect, useState } from "react";
import OrderCard from "../orders/OrderCard";
import apiClientInterceptor from "../../services/apiClientInterceptor";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    apiClientInterceptor
      .get("/orders/")
      .then((res) => setOrders(res.data.results));
  }, []);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await apiClientInterceptor.post(
        `/orders/${orderId}/cancel/`
      );
      if (response.status === 200) {
        setOrders((prevOrder) =>
          prevOrder.map((order) =>
            order.id === orderId ? { ...order, status: "CANCELLED" } : order
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Order details page</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} onCancel={handleCancelOrder} />
      ))}
    </div>
  );
};

export default Orders;
