import FooterSmallDashboard from "components/FooterSmall/FooterSmallDashboard";
import Menu from "components/Menu/Menu";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className="w-3/12 bg-white">
          <Menu></Menu>
        </div>
        <div className="w-full">
          <div className="bg-pink-800 h-1/6">
          </div>
          <div>
           <Outlet></Outlet>
          </div>
          <FooterSmallDashboard/>
        </div>
      </div>
    </>

  );
}