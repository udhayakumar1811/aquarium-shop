import "./SalesChart.css";

function SalesChart() {

  const sales = [30, 60, 40, 80, 70, 95, 65];

  return (

    <div className="chart">

      <h2>Weekly Sales</h2>

      <div className="bars">

        {

          sales.map((value,index)=>(

            <div
              className="bar"
              key={index}
              style={{
                height:`${value*2}px`
              }}
            ></div>

          ))

        }

      </div>

    </div>

  );

}

export default SalesChart;