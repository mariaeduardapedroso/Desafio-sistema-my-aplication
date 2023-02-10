import LoginForm from "components/AuthForms/LoginForm";
import PerfilForm from "components/AuthForms/PerfilForm";
import Subscribe from "components/AuthForms/SubscribeForm";
import DashboardFull from "components/DashBoardFull/DasboardPage";
import EquipList from "components/EquipList/EquipList";
import Error404 from "components/Error404/Error404";
import Home from "components/Home/Home";
import Plans from "components/Plans/Plans";
import User from "components/User/User";
import AuthPage from "pages/AuthPage/AuthPage";
import CreateAccountPage from "pages/AuthPage/Site/CreateAccountPage";
// import LoginPage from "pages/AuthPage/LoginPage";
import Dashboard from "pages/DashBoardPage/Dasboard";
// import DashboardEquip from "pages/DashBoardPage/Site/DasboardEquip";
// import DashboardPage from "pages/DashBoardPage/DasboardPage";
// import DasboardPerfil from "pages/DashBoardPage/DasboardPerfil";
// import DasboardPerfilForm from "pages/DashBoardPage/DasboardPerfilForm";
// import ErrorPage from "pages/SitePage/ErrorPage";
// import HomePage from "pages/SitePage/HomePage";
import PlansPage from "pages/SitePage/PlansPage";
import SitePage from "pages/SitePage/SitePage";
import {Navigate, Route, Routes as Switch } from "react-router-dom";


export default function Routes() {
  return (
    // <Switch>
    //   <Route path="/" element={<HomePage/>}></Route>
    //   <Route path="/Planos" element={<PlansPage/>}></Route>
    //   <Route path="/Error404" element={<ErrorPage/>}></Route>
    //   <Route path="/Login" element={<LoginPage/>}></Route>
    //   <Route path="/Cadastrar" element={<CreateAccountPage/>}></Route>
    //   <Route path="/DashBoard" element={<Dashboard/>}></Route>
    //   <Route path="/DashBoard/Perfil" element={<DasboardPerfil/>}></Route>
    //   <Route path="/DashBoard/Perfil/Editar" element={<DasboardPerfilForm/>}></Route>
    //   <Route path="/DashBoard/Equipe" element={<DashboardEquip/>}></Route>
    //   <Route path="*" element={<Navigate to="/Error404" />}></Route>
    // </Switch>
        <Switch>
         <Route path="/" element={<SitePage />}>
            <Route index element={<Home />}></Route>
            <Route path="Planos" element={<Plans />}></Route>
            <Route path="Error404" element={<Error404 />}></Route>
          </Route>
    
          <Route path="/Login" element={<AuthPage />}>
            <Route index element={<LoginForm />}></Route>
            <Route path="Cadastrar" element={<Subscribe />}></Route>
          </Route> 
    
          <Route path="/DashBoard" element={<Dashboard />}>
            <Route index element={<DashboardFull />}></Route>
            <Route path="Perfil" element={<User />}></Route>
            <Route path="Perfil/Editar" element={<PerfilForm />}></Route>
            <Route path="Equipe" element={<EquipList />}></Route>
          </Route>
    
          <Route path="*" element={<Navigate to="/Error404" />}></Route>
        </Switch>
       
  )
}