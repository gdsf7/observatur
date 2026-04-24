import TopBar from "@/Components/Main/TopBar";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function CityPage({ city }) {
    const formatNumber = (num) => {
        if (num === null || num === undefined) return '--';
        return Number(num).toLocaleString('pt-BR');
    };

    const formatGrowth = (growth) => {
        if (growth === null || growth === undefined) return '--';
        const num = Number(growth);
        return num > 0 ? `+${num}%` : `${num}%`;
    };

    return (
        <div className="min-h-screen bg-[#F6F5F0] text-gray-800 font-sans">
            <TopBar />

            {/* Hero Section */}
            <header className="relative h-[65vh] w-full flex flex-col justify-center bg-gray-900">
                {/* Background Image - using 'image' as instructed */}

                <img
                    src={city.image}
                    alt={city.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-65"
                />

                <Link 
                    href={route('LandingPage') + "#cidades"} 
                    className="absolute top-28 left-8 z-30 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 shadow-xl group border border-white/20"
                    title="Voltar para Cidades"
                >
                    <ArrowLeft size={24} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                </Link>

                <div className="relative z-10 max-w-6xl mx-auto w-full px-6 mt-16">
                    <p className="text-sm text-gray-200 font-medium tracking-wide mb-2">
                        Destinos &gt; {city.region || 'Rio Grande do Sul'}
                    </p>
                    <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                        {city.name}
                    </h1>
                    <p className="max-w-2xl text-lg text-gray-100 drop-shadow">
                        Conhecida como a Cidade Cultura e o Coração do Rio Grande, {city.name} é um polo de inovação, história e turismo no centro do estado.
                    </p>
                </div>
            </header>

            {/* Floating Info Bar */}
            <div className="relative z-20 max-w-5xl mx-auto -mt-12 bg-white rounded-xl shadow-lg p-4 flex items-center justify-between px-8">
                <div className="flex gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Sinal Celular</p>
                            <p className="text-sm font-semibold text-gray-800">Excelente (4G/5G)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Wi-Fi Público</p>
                            <p className="text-sm font-semibold text-gray-800">Disponível em Praças</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Pagamento</p>
                            <p className="text-sm font-semibold text-gray-800">Cartões e Pix</p>
                        </div>
                    </div>
                </div>
                <button className="bg-[#9c4b2a] hover:bg-[#7a391f] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-colors">
                    Descubra a Cidade
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </button>
            </div>

            {/* Panorama Demográfico */}
            <section className="max-w-6xl mx-auto mt-20 mb-24 px-6">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-[#9c4b2a] mb-2">Panorama Demográfico</h2>
                        <p className="text-gray-500 text-sm max-w-md">Dados oficiais atualizados via integração IBGE para suporte ao planejamento turístico e análise de impacto regional.</p>
                    </div>
                    <div className="bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-md">
                        FONTE: IBGE CENSO 2022
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* População */}
                    <div className="bg-[#EAE8E0] p-6 rounded-lg relative overflow-hidden">
                        <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-2">População Residente</p>
                        <h3 className="text-4xl font-extrabold text-gray-800">{formatNumber(city.population)}</h3>
                        <p className="text-green-700 text-sm font-medium mt-6 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            {formatGrowth(city.populational_growth)} desde o último censo
                        </p>
                        {/* Background Icon */}
                        <svg className="w-24 h-24 absolute right-2 top-6 text-gray-300 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>

                    {/* Área Territorial */}
                    <div className="bg-[#EAE8E0] p-6 rounded-lg relative overflow-hidden">
                        <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-2">Área Territorial</p>
                        <h3 className="text-4xl font-extrabold text-gray-800 flex items-baseline gap-1">
                            {formatNumber(city.area)} <span className="text-xl font-medium">km²</span>
                        </h3>
                        <p className="text-gray-500 text-sm font-medium mt-6">Extensão oficial da unidade territorial</p>
                        {/* Background Icon */}
                        <svg className="w-20 h-20 absolute right-4 top-8 text-gray-300 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                    </div>

                    {/* Densidade */}
                    <div className="bg-[#EAE8E0] p-6 rounded-lg relative overflow-hidden">
                        <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-2">Densidade Demográfica</p>
                        <h3 className="text-4xl font-extrabold text-gray-800">{formatNumber(city.populational_density)}</h3>
                        <p className="text-gray-500 text-sm font-medium mt-6">Habitantes por quilômetro quadrado</p>
                        {/* Background Icon */}
                        <svg className="w-20 h-20 absolute right-4 top-8 text-gray-300 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                </div>
            </section>

            {/* Explore o Território */}
            <section className="bg-[#EFECE4] py-20 border-y border-[#e2dec9]">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold text-[#9c4b2a] mb-4">Explore o Território</h2>
                        <p className="text-gray-600 text-sm mb-8">Navegue pelos principais pontos turísticos, geossítios e equipamentos culturais de {city.name}.</p>

                        {/* Empty State for Spots */}
                        <div className="bg-white/50 border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
                            <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <p className="font-semibold">Nenhum ponto registrado</p>
                            <p className="text-sm mt-1">Os pontos turísticos desta cidade ainda não foram mapeados.</p>
                        </div>
                    </div>

                    {/* Right Column - Map Placeholder */}
                    <div className="lg:col-span-2 relative h-[400px] bg-[#dbe8ed] rounded-xl flex items-center justify-center overflow-hidden border border-[#c4d6de] shadow-inner">
                        <div className="text-center z-10 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-white/50">
                            <div className="bg-[#9c4b2a] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                            </div>
                            <h3 className="font-bold text-gray-800 text-lg">Mapa Interativo</h3>
                            <p className="text-gray-500 text-sm mt-1 mb-4">A visualização de mapa será habilitada assim que houverem pontos cadastrados.</p>
                            <button disabled className="bg-[#0b6e4f] text-white px-4 py-2 rounded font-semibold text-sm opacity-60 cursor-not-allowed">
                                Expandir Visualização
                            </button>
                        </div>
                        {/* Decorative Map Outline (SVG pattern simulation) */}
                        <svg className="absolute inset-0 w-full h-full text-[#b2cfd9] opacity-30 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path fill="currentColor" d="M20,10 Q40,30 30,50 T70,40 T90,80 L90,100 L10,100 Z" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Operadores de Turismo */}
            <section className="max-w-6xl mx-auto py-20 px-6">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-[#9c4b2a] mb-2">Operadores de Turismo</h2>
                        <p className="text-gray-500 text-sm">Prestadores de serviço registrados no CADASTUR.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Empty State for Operators */}
                <div className="bg-white border border-gray-200 rounded-lg p-10 text-center shadow-sm">
                    <p className="text-gray-500 font-medium">Nenhum operador de turismo registrado ainda nesta localidade.</p>
                </div>

                <div className="mt-8 text-center">
                    <button className="text-green-700 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                        Ver todos os prestadores cadastrados
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-[#9c4b2a] font-bold text-lg mb-4">Caminhos do Sul</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            O Observatório de Turismo da Quarta Colônia é uma iniciativa de pesquisa e desenvolvimento para o fortalecimento do turismo regional.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-800 text-sm mb-4">Parceiros</h5>
                        <ul className="text-xs text-gray-500 space-y-2">
                            <li>UFSM</li>
                            <li>IFFar</li>
                            <li>CNPq</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-800 text-sm mb-4">Social</h5>
                        <ul className="text-xs text-gray-500 space-y-2">
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-800 text-sm mb-4">Newsletter</h5>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="bg-[#f2f0e9] border-none text-sm px-4 py-2 w-full focus:ring-0 rounded-l outline-none"
                            />
                            <button className="bg-[#9c4b2a] px-4 py-2 rounded-r flex items-center justify-center text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}