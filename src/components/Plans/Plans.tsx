
export default function Plans() {

    return (
        <main>
            <div className="pb-20 bg-white mt-24">
                <div className="pr-12 text-center">
                    <h1 className="text-gray-700 font-semibold text-3xl mt-48 ">
                        Planos especiais para você!
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 mb-24">
                        Temos vários planos totalmente gratuitos por enquanto, aproveite para testar e nos diga qual mais te agradou.
                    </p>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">Plano Gestor</h6>
                                    <p className="mt-2 mb-4 text-gray-600">
                                        Com esse plano você terá acesso aos projetos que está gerindo e poderá ir adequando a equipe conforme necessita atribuindo tarefas aos seus membros.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 px-4 text-center">
                            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                        <i className="fas fa-retweet"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        Plano Cliente
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-600">
                                        Com esse plano você conseguirá ver qual o andamento do seu projeto e quem são os responsáveis por faze-lo acontecer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                        <i className="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        Plano Projetos
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-600">
                                        Com esse plano você terá acesso aos projetos que está gerindo e poderá ir adequando a equipe conforme necessita atribuindo tarefas aos seus membros.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}