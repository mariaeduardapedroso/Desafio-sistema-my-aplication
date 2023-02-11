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
import Dashboard from "pages/DashBoardPage/Dasboard";
import HomePage from "pages/SitePage/HomePage";
import { Navigate, Route, Routes as Switch } from "react-router-dom";

export default function Routes() {
  return (

    <Switch>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path="Planos" element={<Plans />} />
        <Route path="Error404" element={<Error404 />} />
      </Route>

      <Route path="/Login" element={<AuthPage />}>
        <Route index element={<LoginForm />} />
        <Route path="Cadastrar" element={<Subscribe />} />
      </Route>

      <Route path="/DashBoard" element={<Dashboard />}>
        <Route index element={<DashboardFull />} />
        <Route path="Perfil" element={<User />} />
        <Route path="Perfil/Editar" element={<PerfilForm />} />
        <Route path="Equipe" element={<EquipList />} />
      </Route>

      <Route path="*" element={<Navigate to="/Error404" />} />
    </Switch>

  )
}