import "./DashboardStats.css";

function DashboardStats() {

  const stats = [
    {
      title: "Products",
      value: 120,
    },
    {
      title: "Orders",
      value: 340,
    },
    {
      title: "Customers",
      value: 180,
    },
    {
      title: "Revenue",
      value: "₹1,25,000",
    },
  ];

  return (

    <div className="stats">

      {

        stats.map((item,index)=>(

          <div
            className="stat-card"
            key={index}
          >

            <h4>{item.title}</h4>

            <h2>{item.value}</h2>

          </div>

        ))

      }

    </div>

  );

}

export default DashboardStats;