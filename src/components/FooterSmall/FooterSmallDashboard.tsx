import { Link } from "react-router-dom";

export default function FooterSmallDashboard(props: any) {
  return (
    <div className=" bg-pink-400">
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-pink-400"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://github.com/mariaeduardapedroso"
                  className="text-white hover:text-gray-900 text-sm font-semibold py-1"
                >
                  Maria Eduarda Pedroso
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://github.com/mariaeduardapedroso/Desafio-sistema-my-aplication/blob/main/README.md"
                    className="text-white hover:text-gray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <Link to="/Dashboard" className="text-white hover:text-gray-800 text-sm font-semibold block py-1 px-3">Página Inicial</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}