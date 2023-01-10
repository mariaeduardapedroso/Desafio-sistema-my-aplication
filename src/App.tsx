import Footer from "components/Footer/Footer";
import FooterSmall from "components/FooterSmall/FooterSmall";
import Nav from "components/Nav/Nav";
import Error404 from "pages/Error404";
import Login from "pages/Login";


export default function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Error404 />
      </div>
      <div>
        <Footer></Footer>
      </div>
      <div>
        <Login></Login>
      </div>
    </div>
  )
}