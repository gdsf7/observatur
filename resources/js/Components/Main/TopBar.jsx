import { Link, usePage } from "@inertiajs/react";
import logo_caminhos from "../../../../public/images/logo_caminhos.png";

export default function TopBar() {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-300 backdrop-blur-sm shadow-md transition-all duration-300 opacity-90">
            <div className="max-w-[1700px] h-20 mx-auto flex items-center justify-between px-6 lg:px-16 py-3">
                
                <div>
                    <Link href="/">
                        <img 
                            src={logo_caminhos} 
                            alt="Logo Caminhos do Sul" 
                            className="h-16 md:h-14 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-x-6 lg:gap-x-10 text-gray-900 font-semibold text-sm lg:text-base tracking-tight">
                    <Link href="/#inicio" className="hover:text-[#cf5c2a] transition duration-200 hidden md:block">
                        Início
                    </Link>
                    <Link href="/#observatorio" className="hover:text-[#cf5c2a] transition duration-200 hidden md:block">
                        O Observatório
                    </Link>
                    <Link href="/#cidades" className="hover:text-[#cf5c2a] transition duration-200 hidden md:block">
                        Cidades
                    </Link>
                    <Link href="/#indicadores" className="hover:text-[#cf5c2a] transition duration-200 hidden lg:block">
                        Indicadores
                    </Link>
                    <Link href="/#publicacoes" className="hover:text-[#cf5c2a] transition duration-200 hidden lg:block">
                        Publicações
                    </Link>
                    <Link href="/#contato" className="hover:text-[#cf5c2a] transition duration-200 hidden lg:block">
                        Contato
                    </Link>
                    
                    <div className="flex items-center gap-3 ml-2 md:ml-4 md:pl-6 md:border-l border-gray-400">
                        {user ? (
                            <Link 
                                href={route('logout')} 
                                method="post" 
                                as="button" 
                                className="px-5 py-2 md:py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition duration-300 shadow-sm"
                            >
                                Sair
                            </Link>
                        ) : (
                            <>
                                <Link 
                                    href={route('login')} 
                                    className="px-5 py-2 md:py-2.5 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 rounded-lg font-medium transition duration-300 shadow-sm"
                                >
                                    Entrar
                                </Link>
                                <Link 
                                    href={route('register')} 
                                    className="px-5 py-2 md:py-2.5 bg-[#cf5c2a] hover:bg-[#b34d20] text-white rounded-lg font-medium transition duration-300 shadow-sm"
                                >
                                    Cadastrar
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}