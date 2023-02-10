import EquipList from "components/EquipList/EquipList";
import FooterSmallDashboard from "components/FooterSmall/FooterSmallDashboard";
import Menu from "components/Menu/Menu";
import User from "components/User/User";
import { Outlet } from "react-router-dom";

export default function DashboardFull() {
  return (
    <>

      <div className="flex flex-row bg-gray-50">
        <div className="w-1/2 border-8 border-transparent rounded-lg">
          <User></User>
        </div>
        <div className="w-1/2 border-8 border-transparent">
          <EquipList></EquipList>
        </div>


      </div>
    </>

  );
}