import TopBar from "@/Components/Main/TopBar";
import { Link } from "@inertiajs/react";

export default function LandingPage() {
    return (
        <>

            <TopBar />

            {/* Inicio */}
            <div>
                <br /><br /><br />
                <div>Descubra os Caminhos do Sul</div>
                <div>Explore dados, pesquisas e insights sobre turismo na Quarta Colônia e Centro do Rio Grande do Sul</div>
            </div>

            <br></br>

            <Link><button>Explorar Cidades</button></Link>
            <Link><button>Saiba Mais</button></Link>

            {/* Arrow down "jumping" here */}

            {/* O Observatório */}
            <div>
                <div>O Observatório de Turismo Caminhos do Sul</div>
                <div>Criado em 2021 através de uma iniciativa do Instituto Federal de Educação, Ciência e Tecnologia Farroupilha (IFFar) e da Universidade Federal de Santa Maria (UFSM), o Observatório é financiado pelo CNPq.</div>

                <div>Nosso Objetivo</div>
                <div>Criar um sistema de informação e monitoramento da atividade turística nas IGRs Quarta Colônia e Centro do Rio Grande do Sul, facilitando o acesso a informações sobre oferta e demanda para subsidiar políticas públicas e ações no setor.</div>

                <div>O que fazemos</div>
                <div>Pesquisa de demanda turística</div>
                <div>Acompanhamentos de pesquisas acadêmicas</div>
                <div>Análise de dados de parceiros</div>
                <div>Elaboração de boletins informativos</div>
                <div>Geoinformação turística</div>
            </div>

            {/* Cidades */}
            <div>
                <div>Cidades Monitoradas</div>
                <div>Acompanhamos dados e indicadores turísticos em 10 cidades da Quarta Colônia e Centro do Rio Grande do Sul</div>

                <div>
                    <div>Santa Maria</div>
                    <div>{/* <PinIcon/> */} <span>Central</span></div>
                    <hr />
                    <div>{/*<PeopleIcon/>*/} <span>População</span>
                        <div>283 mil</div>
                    </div>
                    <div><span>Crescimento</span>
                        <div>+2.5%</div>
                    </div>
                </div>
            </div>

            {/* Indicadores */}
            <div>
                <div>Indicadores Principais</div>
                <div>Dados e métricas que refletem a dinâmica do turismo na região</div>

                <div>
                    {/* PeopleIcon */}
                    <div>Visitantes Anuais</div>
                    <div>2.5M+</div>
                </div>

                <div>
                    <div>Por que precisamos de observatórios?</div>
                    <div>Os observatórios de turismo são essenciais pois fornecem dados e análises que ajudam na tomada de decisões estratégicas para o desenvolvimento sustentável do setor, não só para os gestores municipais, mas também para o terceiro setor. Eles permitem monitorar tendências, identificar oportunidades e desafios, e subsidiar políticas públicas baseadas em evidências.</div>
                </div>
            </div>

            {/* Publicações */}
            <div>
                <div>Publicações e Pesquisas</div>
                <div>Acesse nossos relatórios, boletins informativos e estudos sobre turismo na região</div>
                <div>
                    <div>SheetIcon <span>Relatório</span></div>
                    <div>Análise de Demanda Turística 2024</div>
                    <div>Relatório completo sobre os padrões de visitação nas cidades da Quarta Colônia. </div>
                    <div>CalendarIcon Março 2024</div>
                    <div>Equipe de Pesquisa</div>
                    <Link><button>Ler Publicação</button></Link>
                </div>
                <div>
                    <div>Quer receber nossas publicações?</div>
                    <div>Inscreva-se em nossa newsletter para receber boletins informativos e relatórios em primeira mão</div>
                    <form>
                        <input type="email" placeholder="Email" />
                        <button type="submit">Inscrever-se</button>
                    </form>
                </div>
            </div>

           
        </>
    );
}