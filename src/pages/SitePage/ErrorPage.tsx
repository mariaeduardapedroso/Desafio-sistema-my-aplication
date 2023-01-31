import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import Error404 from "components/Error404/Error404";

export default function ErrorPage() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Error404 />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}