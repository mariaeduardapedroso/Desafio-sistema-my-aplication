import FooterSmall from "components/FooterSmall/FooterSmall";
import LoginForm from "components/AuthForms/LoginForm";


export default function LoginPage() {
    return (
        <main>
            <section className="absolute w-full bg-pink-400">
                <LoginForm></LoginForm>
                <FooterSmall relative />
            </section>
        </main>
    );
}