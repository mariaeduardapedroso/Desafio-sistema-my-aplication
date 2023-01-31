import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";
import Plans from "components/Plans/Plans";

export default function PlansPage() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Plans></Plans>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}