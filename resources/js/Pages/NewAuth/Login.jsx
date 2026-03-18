import { useForm, Link } from "@inertiajs/react";
import TopBar from "@/Components/Main/TopBar";
import fundo from "../../../../public/images/fundo.png";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const { data, setData, post, errors, processing } = useForm({
        email: '',
        password: '',
    });

    const LoginSubmit = (e) => {
        e.preventDefault();
        post(route('loginSubmit'));
    }

    return (
        <div className="min-h-screen font-sans text-gray-800">
            <TopBar />
            
            <section className="relative w-full h-screen flex items-center justify-center bg-gray-900">
                <img src={fundo} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="relative z-10 w-full max-w-md px-6 lg:mt-16">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-10">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Bem-vindo de volta</h1>
                            <p className="text-gray-300 font-light">Acesse o painel do Observatório</p>
                        </div>

                        <form onSubmit={LoginSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">E-mail</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input 
                                        type="email" 
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-400/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf5c2a] focus:border-transparent transition-all placeholder-gray-400"
                                        placeholder="seu@email.com"
                                        required
                                    />
                                    {errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">Senha</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input 
                                        type="password" 
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-400/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf5c2a] focus:border-transparent transition-all placeholder-gray-400"
                                        placeholder="••••••••"
                                        required
                                    />
                                    {errors.password && <div className="text-red-400 text-sm mt-1">{errors.password}</div>}
                                </div>
                                <div className="flex justify-end mt-2">
                                    <Link href="#" className="text-sm text-[#cf5c2a] hover:text-[#e46a35] transition-colors">Esqueceu a senha?</Link>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={processing}
                                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#cf5c2a] hover:bg-[#b34d20] text-white rounded-xl font-medium transition duration-300 shadow-lg disabled:opacity-70"
                            >
                                <span>Entrar</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                        
                        <div className="mt-8 text-center text-gray-300 text-sm">
                            Não possui uma conta? {' '}
                            <Link href={route('register')} className="text-[#cf5c2a] hover:text-[#e46a35] font-semibold transition-colors">
                                Cadastrar
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}