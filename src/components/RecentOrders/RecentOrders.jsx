import "./RecentOrders.css";

const orders = [

  {
    id:1001,
    customer:"Udhaya",
    amount:499,
    status:"Delivered"
  },

  {
    id:1002,
    customer:"Kumar",
    amount:299,
    status:"Pending"
  },

  {
    id:1003,
    customer:"Raj",
    amount:799,
    status:"Shipped"
  }

];

function RecentOrders() {

  return (

    <div className="orders">

      <h2>Recent Orders</h2>

      <table>

        <thead>

          <tr>

            <th>Order ID</th>

            <th>Customer</th>

            <th>Amount</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {

            orders.map(order=>(

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customer}</td>

                <td>₹{order.amount}</td>

                <td>{order.status}</td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default RecentOrders;