import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import { Outlet } from "react-router-dom";

export default function HomePage() {
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