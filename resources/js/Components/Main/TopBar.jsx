import { Link } from "@inertiajs/react";
import logo_caminhos from "../../../../public/images/logo_caminhos.png";

export default function TopBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 opacity-98">
            <div className="max-w-[1700px] h-20 mx-auto flex items-center justify-between px-6 lg:px-16 py-3">
                
                <div>
                    <Link href="/">
                        <img 
                            src={logo_caminhos} 
                            alt="Logo Caminhos do Sul" 
                            className="h-16 md:h-16 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-x-6 lg:gap-x-10 text-gray-900 font-semibold text-sm lg:text-base tracking-tight">
                    <Link href="#" className="hover:text-[#cf5c2a] transition duration-200">
                        Início
                    </Link>
                    <Link href="#" className="hover:text-[#cf5c2a] transition duration-200">
                        O Observatório
                    </Link>
                    <Link href="#" className="hover:text-[#cf5c2a] transition duration-200">
                        Cidades
                    </Link>
                    <Link href="#" className="hover:text-[#cf5c2a] transition duration-200">
                        Indicadores
                    </Link>
                    <Link href="#" className="hover:text-[#cf5c2a] transition duration-200">
                        Publicações
                    </Link>
                    <Link href="#" className="hover:text-[#cf5c2a] transition duration-200">
                        Contato
                    </Link>
                </div>
            </div>
        </nav>
    );
}