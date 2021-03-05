import React from 'react';

import Footer from 'components/client/Footer';

import 'css/main.css';
import logo from 'css/images/logo.jpg';
import user1 from 'css/images/user-1.png';
import user2 from 'css/images/user-2.png';
import user3 from 'css/images/user-3.png';

const Main: React.FC = () => {
    return (
        <div id="wrapper">

            <header id="header" className="alt">
                <h1>[nome da empresa]</h1>
                <p><a target="_blank" rel='noreferrer' href="#">[endereço da sua empresa + link para o google maps]</a>
                </p>
            </header>

            <nav id="nav">
                <ul>
                    <li><a href="#intro" className="active">Quem somos</a></li>
                    <li><a href="#first">Qualidade de atendimento</a></li>
                    <li><a href="#cta">Agendamento</a></li>
                </ul>
            </nav>

            <div id="main">

                    <section id="intro" className="main">
                        <div className="spotlight">
                            <div className="content">
                                <header className="major">
                                    <h2>Quem somos</h2>
                                </header>
                                <p>Somos a [nome da empresa], uma equipe altamente qualificada de reparo e manutenção de peças e computadores. 
                                    Atendemos notebooks, computadores desktop, tablets e outros tipos de equipamentos eletrônicos.
                                    Priorizamos a qualidade de atendimento e trabalho. Não esquecendo dedicação e velocidade de entrega.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Saiba mais</a></li>
                                </ul>
                            </div>
                            <span className="image"><img src={logo} alt="" /></span>
                        </div>
                    </section>

                    <section id="first" className="main special">
                        <header className="major">
                            <h2>Qualidade de Atendimento</h2>
                        </header>
                        <ul className="features">
                            <li>
                                <img className='icon major user-icon' src={user1} alt="Usuário"/>
                                <h3>Carla Macedo</h3>
                                <p>Perfeito atendimento ❤️</p>
                            </li>
                            <li>
                                <img className='icon major user-icon' src={user2} alt="Usuário"/>
                                <h3>Taíssa Damasceno</h3>
                                <p>Profissional de confiança e serviço de qualidade. Podem confiar.</p>
                            </li>
                            <li>
                                <img className='icon major user-icon' src={user3} alt="Usuário"/>
                                <h3>Fernando Francisco</h3>
                                <p>Ótimo atendimento e música ambiente 👊</p>
                            </li>
                        </ul>
                    </section>

                    <section id="cta" className="main special">
                        <header className="major">
                            <h2>Marque o seu agendamento</h2>
                            <p>Agendamento permite a nossa equipe se preparar para melhor atendê-lo(a). <br />
                                Marque o seu agendamento e venha nos visitar!</p>
                        </header>
                        <footer className="major">
                            <ul className="actions special">
                                <li><a href="/agendamento/" className="button primary">Agendar</a></li>
                                <li><a href="#" className="button">Saiba mais</a></li>
                            </ul>
                        </footer>
                    </section>
            </div>
            <Footer />            
        </div>
    )
}

export default Main;