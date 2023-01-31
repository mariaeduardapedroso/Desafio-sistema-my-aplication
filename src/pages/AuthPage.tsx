import FooterSmall from "components/FooterSmall/FooterSmall";
import LoginForm from "components/AuthForms/LoginForm";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import SubscribeForm from "components/AuthForms/SubscribeForm";

export default function AuthPage() {
    return (
        <BrowserRouter>
            <main>
                <section className="absolute w-full bg-pink-400">

                    <Switch>
                        <Route path="/Loguin/Cadastrar" element={<SubscribeForm></SubscribeForm>}></Route>
                        <Route path="/Loguin/" element={<LoginForm></LoginForm>}></Route>

                    </Switch>

                    <SubscribeForm></SubscribeForm>
                    <FooterSmall relative />
                </section>
            </main>
        </BrowserRouter>
    );
}