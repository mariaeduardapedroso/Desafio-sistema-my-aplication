import FooterSmall from "components/FooterSmall/FooterSmall";
import { Outlet } from "react-router-dom"

export default function AuthPage() {
    return (
        <main>
            <section className="absolute w-full bg-pink-400">
                <Outlet></Outlet>
                <FooterSmall relative />
            </section>
        </main>
    );
}