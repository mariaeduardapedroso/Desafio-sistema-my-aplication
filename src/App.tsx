import Nav from "components/Nav/Nav";
import Error404 from "pages/Error404";


export default function App() {
  return (
    <><div>
<Nav />
    </div>
    
    <div className="bg-pink-400 w-full h-screen"><Error404/></div>
  </>
  )
}