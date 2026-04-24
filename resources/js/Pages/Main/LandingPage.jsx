import TopBar from "@/Components/Main/TopBar";
import { Link, usePage } from "@inertiajs/react";
import {
    ArrowDown, CheckCircle2, MapPin, Users, TrendingUp,
    Calendar, FileText, Facebook, Instagram, Youtube,
    Phone, Mail, Map, Search, BarChart2, BookOpen
} from "lucide-react";
import fundo from "../../../../public/images/fundo.png";
import observatorio from "../../../../public/images/observatorio.png";
import logo_caminhos from "../../../../public/images/logo_caminhos.png";


const indicators = [
    { title: "Visitantes Anuais", value: "2.5M+", icon: Users },
    { title: "Crescimento Anual", value: "+18%", icon: TrendingUp },
    { title: "Pesquisas Realizadas", value: "150+", icon: Calendar },
    { title: "Dados Monitorados", value: "500+", icon: BarChart2 },
];

const publications = [
    { type: "Relatório", title: "Análise de Demanda Turística 2024", desc: "Relatório completo sobre os padrões de visitação nas cidades da Quarta Colônia.", date: "Março 2024", author: "Equipe de Pesquisa" },
    { type: "Boletim", title: "Boletim Informativo - Fevereiro 2024", desc: "Dados mensais sobre indicadores turísticos e tendências de mercado.", date: "Fevereiro 2024", author: "Observatório Caminhos do Sul" },
    { type: "Estudo", title: "Mapeamento da Oferta Turística Regional", desc: "Inventário completo de atrativos, hospedagem e serviços turísticos.", date: "Janeiro 2024", author: "Equipe de Pesquisa" },
];

export default function LandingPage({ cities }) {
    const { user } = usePage().props.auth;
    return (
        <div className="min-h-screen font-sans text-gray-800">
            <TopBar />

            <section className="relative w-full h-screen flex items-center justify-center bg-gray-900" id="inicio" >
                <img src={fundo} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex flex-col items-center text-center px-4 mt-16">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
                        Descubra os <br /> Caminhos do Sul
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
                        Explore dados, pesquisas e insights sobre turismo na Quarta Colônia e Centro do Rio Grande do Sul
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#" className="px-8 py-3 bg-[#cf5c2a] hover:bg-[#b34d20] text-white rounded font-medium transition duration-300 shadow-md">
                            Explorar Cidades &rarr;
                        </Link>
                        <Link href="#" className="px-8 py-3 border border-white text-white hover:bg-white hover:text-gray-900 rounded font-medium transition duration-300">
                            Saiba Mais
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-8 z-10 animate-bounce">
                    <ArrowDown className="text-white w-6 h-6" />
                </div>
            </section>

            {/* O Observatório */}
            <section className="py-20 px-6 lg:px-20 bg-[#f9f8f4]" id="observatorio" >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <img src={observatorio} alt="Equipe do Observatório" className="object-cover w-full h-full" />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#cf5c2a] leading-tight">
                            O Observatório de Turismo Caminhos do Sul
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Criado em 2021 através de uma iniciativa do Instituto Federal de Educação, Ciência e Tecnologia Farroupilha (IFFar) e da Universidade Federal de Santa Maria (UFSM), o Observatório é financiado pelo CNPq.
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-green-900 mb-2">Nosso Objetivo</h3>
                            <p className="text-gray-600">
                                Criar um sistema de informação e monitoramento da atividade turística nas IGRs Quarta Colônia e Centro do Rio Grande do Sul, facilitando o acesso a informações sobre oferta e demanda para subsidiar políticas públicas e ações no setor.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-green-900 mb-4">O que Fazemos</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-700 font-medium">
                                {[
                                    "Pesquisa de demanda turística", "Análise de dados de parceiros",
                                    "Acompanhamento de pesquisas acadêmicas", "Elaboração de boletins informativos",
                                    "Mapeamento da oferta turística", "Geoinformação turística"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[#cf5c2a] flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-20 bg-white" id="cidades">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#cf5c2a] mb-4">Cidades Monitoradas</h2>
                    <p className="text-gray-500 text-lg">Acompanhamos dados e indicadores turísticos em 10 cidades da Quarta Colônia e Centro do Rio Grande do Sul</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cities.map((city) => (
                        <div key={city.id} className="bg-[#f9f8f4] rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-xl font-bold mb-1">{city.name}</h3>
                            <div className="flex items-center text-[#cf5c2a] text-sm mb-4 font-medium">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{city.region}</span>
                            </div>
                            <hr className="border-gray-200 mb-4" />
                            <div className="flex justify-between text-sm">
                                <div>
                                    <div className="flex items-center text-gray-500 mb-1">
                                        <Users className="w-4 h-4 mr-1" /> População
                                    </div>
                                    <div className="font-bold text-lg">{city.population}</div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end text-gray-500 mb-1">
                                        <TrendingUp className="w-4 h-4 mr-1" /> Crescimento
                                    </div>
                                    <div className="font-bold text-lg text-[#cf5c2a]">{city.populational_growth > 0 ? '+' : ''}{city.populational_growth}%</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Indicadores */}
            <section className="py-20 px-6 lg:px-20 bg-[#f9f8f4]" id="indicadores">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#cf5c2a] mb-4">Indicadores Principais</h2>
                    <p className="text-gray-500 text-lg">Dados e métricas que refletem a dinâmica do turismo na região</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {indicators.map((ind, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#cf5c2a]">
                            <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center mb-4">
                                <ind.icon className="w-5 h-5 text-[#cf5c2a]" />
                            </div>
                            <div className="text-gray-500 text-sm font-medium mb-1">{ind.title}</div>
                            <div className="text-3xl font-bold text-gray-900">{ind.value}</div>
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto bg-white rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-[#cf5c2a] mb-4">Por que precisamos de observatórios?</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Os observatórios de turismo são essenciais pois fornecem dados e análises que ajudam na tomada de decisões estratégicas para o desenvolvimento sustentável do setor, não só para os gestores municipais, mas também para o terceiro setor. Eles permitem monitorar tendências, identificar oportunidades e desafios, e subsidiar políticas públicas baseadas em evidências.
                    </p>
                </div>
            </section>

            {/* Publicações */}
            <section className="py-20 px-6 lg:px-20 bg-white" id="publicacoes">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#cf5c2a] mb-4">Publicações e Pesquisas</h2>
                    <p className="text-gray-500 text-lg">Acesse nossos relatórios, boletins informativos e estudos sobre turismo na região</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {publications.map((pub, idx) => (
                        <div key={idx} className="bg-[#f9f8f4] rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-orange-100 rounded text-[#cf5c2a]">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-semibold text-[#cf5c2a] bg-orange-100 px-3 py-1 rounded-full uppercase tracking-wider">
                                    {pub.type}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 line-clamp-2">{pub.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">{pub.desc}</p>

                            <div className="space-y-2 text-sm text-gray-500 mb-6">
                                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {pub.date}</div>
                                <div className="flex items-center gap-2"><Users className="w-4 h-4" /> {pub.author}</div>
                            </div>

                            <Link href="#" className="w-full text-center py-2.5 border border-[#cf5c2a] text-[#cf5c2a] hover:bg-[#cf5c2a] hover:text-white rounded font-medium transition duration-300">
                                Ler Publicação
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="max-w-5xl mx-auto bg-[#f9f8f4] rounded-2xl p-10 text-center shadow-sm">
                    <h3 className="text-2xl font-bold mb-2">Quer receber nossas publicações?</h3>
                    <p className="text-gray-500 mb-8">Inscreva-se em nossa newsletter para receber boletins informativos e relatórios em primeira mão</p>
                    <form className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-3">
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="flex-grow px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#cf5c2a]"
                            required
                        />
                        <button type="submit" className="px-6 py-3 bg-[#cf5c2a] hover:bg-[#b34d20] text-white rounded font-medium transition duration-300">
                            Inscrever-se
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2b2b2b] text-gray-400 py-16 px-6 lg:px-20 text-sm" id="contato">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center text-white text-2xl font-bold mb-4">
                            {/* logo */}
                            <img src={logo_caminhos} alt="Logo Caminhos do Sul" className="w-36 h-24 mr-2" />
                            {/* <span>Observatório Caminhos do Sul</span> */}
                        </div>
                        <p className="max-w-xs leading-relaxed">
                            Sistema de informação e monitoramento da atividade turística na Quarta Colônia e Centro do Rio Grande do Sul.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-[#cf5c2a] flex-shrink-0" />
                                <div>
                                    <div className="text-gray-300">Telefone</div>
                                    <div>(55) 9.9924-6004</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#cf5c2a] flex-shrink-0" />
                                <div>
                                    <div className="text-gray-300">Email</div>
                                    <div>raquel.lunardi@iffarroupilha.edu.br</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Map className="w-5 h-5 text-[#cf5c2a] flex-shrink-0" />
                                <div>
                                    <div className="text-gray-300">Endereço</div>
                                    <div>Alameda Santiago do Chile, 195<br />Santa Maria, RS</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Redes Sociais</h4>
                        <div className="flex gap-3 mb-4">
                            <a href="#" className="w-10 h-10 bg-[#3a3a3a] rounded flex items-center justify-center text-white hover:bg-[#cf5c2a] transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#3a3a3a] rounded flex items-center justify-center text-white hover:bg-[#cf5c2a] transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#3a3a3a] rounded flex items-center justify-center text-white hover:bg-[#cf5c2a] transition">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                        <p>Acompanhe nossas atualizações e conteúdos sobre turismo na região.</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto border-t border-[#444] pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; 2024 Observatório de Turismo Caminhos do Sul. Todos os direitos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition">Privacidade</Link>
                        <Link href="#" className="hover:text-white transition">Termos</Link>
                        <Link href="#" className="hover:text-white transition">Cookies</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}