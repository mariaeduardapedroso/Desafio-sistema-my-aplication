import FooterSmallDashboard from "components/FooterSmall/FooterSmallDashboard";
import Menu from "components/Menu/Menu";
import User from "components/User/User";

export default function DasboardPerfil() {
  return (
    <main>
      <div className="flex">
        <div className="w-3/12 bg-white">
          <Menu></Menu>
        </div>
        <div className="w-full">
          <div className="bg-pink-800 h-2/6">
          </div>
          <User></User>
          <FooterSmallDashboard/>
        </div>
      </div>
    </main>

  );
}