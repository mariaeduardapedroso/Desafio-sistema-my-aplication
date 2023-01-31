import PerfilForm from "components/AuthForms/PerfilForm";
import FooterSmallDashboard from "components/FooterSmall/FooterSmallDashboard";
import Menu from "components/Menu/Menu";

export default function DasboardPerfilForm() {
  return (
    <main>
      <div className="flex">
        <div className="w-3/12 bg-white">
          <Menu></Menu>
        </div>
        <div className="w-full">
          <div className="bg-pink-800 h-2/6">
          </div>
          <PerfilForm/>
          <FooterSmallDashboard/>
        </div>
      </div>
    </main>

  );
}