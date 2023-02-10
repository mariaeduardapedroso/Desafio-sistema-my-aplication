import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import Error404 from "components/Error404/Error404";
import { Outlet } from "react-router-dom";

export default function SitePage() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}