import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";

export default function HomePage() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Home></Home>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}