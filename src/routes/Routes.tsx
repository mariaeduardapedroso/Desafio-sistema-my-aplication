import CreateAccountPage from "pages/AuthPage/CreateAccountPage";
import LoginPage from "pages/AuthPage/LoginPage";
import DashboardEquip from "pages/DashBoardPage/DasboardEquip";
import Dashboard from "pages/DashBoardPage/DasboardPage";
import DasboardPerfil from "pages/DashBoardPage/DasboardPerfil";
import DasboardPerfilForm from "pages/DashBoardPage/DasboardPerfilForm";
import ErrorPage from "pages/SitePage/ErrorPage";
import HomePage from "pages/SitePage/HomePage";
import PlansPage from "pages/SitePage/PlansPage";
import {Navigate, Route, Routes as Switch } from "react-router-dom";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/Planos" element={<PlansPage/>}></Route>
      <Route path="/Error404" element={<ErrorPage/>}></Route>
      <Route path="/Login" element={<LoginPage/>}></Route>
      <Route path="/Cadastrar" element={<CreateAccountPage/>}></Route>
      <Route path="/DashBoard" element={<Dashboard/>}></Route>
      <Route path="/DashBoard/Perfil" element={<DasboardPerfil/>}></Route>
      <Route path="/DashBoard/Perfil/Editar" element={<DasboardPerfilForm/>}></Route>
      <Route path="/DashBoard/Equipe" element={<DashboardEquip/>}></Route>
      <Route path="*" element={<Navigate to="/Error404" />}></Route>
    </Switch>

  )
}