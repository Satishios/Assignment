import {
  // AppstoreOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  PercentageOutlined,
  WalletOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Signin from "./Signin";


function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <SettingOutlined />,
            key: "/",
          },
          {
            label: "Product",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Income",
            key: "/income",
            icon: <WalletOutlined />,
          },
          {
            label: "Promote",
            key: "/promote",
            icon: <PercentageOutlined />,
          },

          <space></space>,
          <space></space>,
          <space></space>,
          <space></space>,
          <space></space>,
          <space></space>,


          {
            label: "Evano",
            key: "/Signin",
            icon: <UserOutlined/>,
          },
          
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
