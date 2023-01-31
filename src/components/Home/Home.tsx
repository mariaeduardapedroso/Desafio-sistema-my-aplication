import GifLogo from "../images/Org Project Logo.gif"

export default function Home() {
  return (
    <main>
      <section className=" bg-white">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center">

          <section className="pb-20 bg-white -mt-24">
          </section>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
            }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Seu projeto conosco.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Nosso gerenciador de projetos consegue
                    demonstrar todas as etapas e os responsaveis
                    executando, para assim você ficar mais leve.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            {/* deixar mais preto */}
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* barrinha bonita */}
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>








        <section className="pb-20 bg-white -mt-24">
          <div className="container mx-auto px-4">

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Trabalhar com a gente é um prazer
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Temos a praticidade de na palma da sua mão
                  conseguir ver em qual estado seu projeto está,
                  garantindo segurança e transparencia para você
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Além disso, é possivel ver toda a equipe que
                  está executando seu projeto, assim facilitando
                  a comunicação com eles e também trazendo mais
                  confiança para o projeto.
                </p>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src={GifLogo}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className=" p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Como nascemos
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Nossa empresa nasceu da necessidade
                      de um produto pensado para gerenciar
                      projetos no mercado Brasileiro de forma
                      simples, prática e confiavel.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}