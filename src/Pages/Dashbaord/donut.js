// import { Space } from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from "chart.js";
  import { Chart, Doughnut } from "react-chartjs-2";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  
const data = 
{
  datasets: [{
    label :'Poll',
    data: [10, 20,25],
    backgroundColor: [
    ' #bd1381',
    '#6d1a99',
    '#ebedf0',],
  },
]};
// const Text = { 
//   const {ctx,data}= Chart ;
//   ctx.save();
//   ctx.font ='bold 30px sans-serif';
//   ctx.fillStyle='rgba(54,162,235,1';
//   ctx.fillText('65%');
//   ctx.fillText('Total New Customers%');
//   };

function Donut(){
  
  return(
    <div>
        <h2>customers</h2> {"Customers that buy products"}
    <div className="Donut" style={{marginLeft:'20px'}}>
      <Doughnut data={data}/>
    </div>
    </div>
  )
}

export default Donut;
