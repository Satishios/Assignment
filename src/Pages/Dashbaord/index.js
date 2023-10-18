import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table,Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getProduct, getOrders, getRevenue } from "../../API";
// import {Doughnut} from "./lib/tui-wrapper";
import Donut from "./donut";
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
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [product, setProduct] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getProduct().then((res) => {
      setProduct(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space size={20} direction="vertical"  style={{ marginRight: '60px', }}>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal" >
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                marginRight:20,

              }}
            />
          }
          title={"Earnings"}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                marginRight:20,

              }}
            />
          }
          title={"Orders"}
          value={product}
        />
        <DashboardCard
          icon={
            <WalletOutlined 
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                 marginRight:20,

              }}
            />
          }
          title={"Balance"}
          value={customers}
        />
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                marginRight:20,

              }}
            />
          }
          title={"Total Sales"}
          value={revenue}
        />
      </Space>
      <Space>
        <DashboardChart />
      </Space>
      <RecentOrders />
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );

}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });


      const dataSource = {
        labels,
        datasets: [
          {
            borderRadius: 5,
            data: data,
            backgroundColor:'#6d1a99'

          },
        ],
      };


      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {

      },
      title: {
        display: true,
        text:'Overview Monthly Earnings',
        position: "top",
      },
    },
  };

  return (
    <div className="Donut">
      <Card style={{ width: 700, height: 350 }}>
        <Bar options={options} data={reveneuData} />
      </Card>
      <div>
        <Card style={{ width: 300, height: 350 ,marginLeft:'60px'}}>
          <Donut></Donut>
        </Card>
      </div>
    </div>
  );
}

function RecentOrders() 
{
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <Card>
    <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Product Name",
            dataIndex: "title",
          },
          {
            title: "Stock",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
          {
            title: "Total Sales",
            dataIndex: "totalSales",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </Card>
  );
}
export default Dashboard;
