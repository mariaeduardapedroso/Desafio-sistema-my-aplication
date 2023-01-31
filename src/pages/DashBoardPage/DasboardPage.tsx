import EquipList from "components/EquipList/EquipList";
import FooterSmallDashboard from "components/FooterSmall/FooterSmallDashboard";
import Menu from "components/Menu/Menu";
import User from "components/User/User";

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
          <div className="flex flex-row bg-gray-50">
            <div className="w-1/2 border-8 border-transparent rounded-lg">
              <User></User>
            </div>
            <div className="w-1/2 border-8 border-transparent">
              <EquipList></EquipList>
            </div>
          
          </div>
          <FooterSmallDashboard/>
        </div>
      </div>
    </>

  );
}