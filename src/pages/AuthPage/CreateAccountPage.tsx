import FooterSmall from "components/FooterSmall/FooterSmall";
import Subscribe from "components/AuthForms/SubscribeForm";


export default function CreateAccountPage() {
    return (
        <main>
            <section className="absolute w-full bg-pink-400">
                <Subscribe></Subscribe>
                <FooterSmall relative />
            </section>
        </main>
    );
}