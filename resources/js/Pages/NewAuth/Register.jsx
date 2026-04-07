import { useForm, Link } from "@inertiajs/react";
import TopBar from "@/Components/Main/TopBar";
import fundo from "../../../../public/images/fundo.png";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

export default function RegisterPage() {
    const { data, setData, post, errors, processing } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const registerSubmit = (e) => {
        e.preventDefault();
        post(route('registerSubmit'));
    }

    return (
        <div className="min-h-screen font-sans text-gray-800 bg-gray-900">
            <TopBar />
            
            <section className="relative w-full min-h-screen flex items-center justify-center py-24">
                <img src={fundo} alt="Background" className="absolute inset-0 w-full h-full object-cover fixed" />
                <div className="absolute inset-0 bg-black/50 fixed"></div>
                
                <div className="relative z-10 w-full max-w-md px-6">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-10">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Criar Conta</h1>
                            <p className="text-gray-300 font-light">Junte-se ao Observatório de Turismo</p>
                        </div>

                        <form onSubmit={registerSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-1.5">Nome</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input 
                                            type="text" 
                                            value={data.first_name}
                                            onChange={(e) => setData('first_name', e.target.value)}
                                            className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-gray-400/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf5c2a] focus:border-transparent transition-all placeholder-gray-400 text-sm"
                                            placeholder="Nome"
                                            required
                                        />
                                    </div>
                                    {errors.first_name && <div className="text-red-400 text-xs mt-1">{errors.first_name}</div>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-1.5">Sobrenome</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input 
                                            type="text" 
                                            value={data.last_name}
                                            onChange={(e) => setData('last_name', e.target.value)}
                                            className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-gray-400/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf5c2a] focus:border-transparent transition-all placeholder-gray-400 text-sm"
                                            placeholder="Sobrenome"
                                            required
                                        />
                                    </div>
                                    {errors.last_name && <div className="text-red-400 text-xs mt-1">{errors.last_name}</div>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-1.5">E-mail</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input 
                                        type="email" 
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-gray-400/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf5c2a] focus:border-transparent transition-all placeholder-gray-400 text-sm"
                                        placeholder="seu@email.com"
                                        required
                                    />
                                    {errors.email && <div className="text-red-400 text-xs mt-1">{errors.email}</div>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-1.5">Senha</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input 
                                        type="password" 
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-gray-400/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf5c2a] focus:border-transparent transition-all placeholder-gray-400 text-sm"
                                        placeholder="••••••••"
                                        required
                                    />
                                    {errors.password && <div className="text-red-400 text-xs mt-1">{errors.password}</div>}
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-1.5">Confirmar Senha</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input 
                                        type="password" 
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-gray-400/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf5c2a] focus:border-transparent transition-all placeholder-gray-400 text-sm"
                                        placeholder="••••••••"
                                        required
                                    />
                                    {errors.password_confirmation && <div className="text-red-400 text-xs mt-1">{errors.password_confirmation}</div>}
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={processing}
                                className="w-full flex items-center justify-center gap-2 py-3 mt-4 bg-[#cf5c2a] hover:bg-[#b34d20] text-white rounded-xl font-medium transition duration-300 shadow-lg disabled:opacity-70"
                            >
                                <span>Criar Conta</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                        
                        <div className="mt-8 text-center text-gray-300 text-sm">
                            Já possui uma conta? {' '}
                            <Link href={route('login')} className="text-[#cf5c2a] hover:text-[#e46a35] font-semibold transition-colors">
                                Entrar
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}