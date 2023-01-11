import Footer from "components/Footer/Footer";
import FooterSmall from "components/FooterSmall/FooterSmall";
import Nav from "components/Nav/Nav";
import Error404 from "pages/Error404";
import Home from "pages/Home";
import Login from "pages/Login";
import Plans from "pages/Plans";


export default function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      {/* <div>
        <Error404 />
      </div>
      <div>
        <Footer></Footer>
      </div> */}
      <div>
        {/* <Plans></Plans> */}
      </div>
      <div>
        <Home></Home>
      </div>
      {/* <div>
        <Login></Login>
      </div> */}
      <div>
         <Footer></Footer> 
      </div> 
    </div>
  )
}