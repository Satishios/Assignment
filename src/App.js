// import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
// import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
// import Donut from "./Pages/Dashbaord/donut";

function App() {
  return (
    <div className="App">
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default App;
