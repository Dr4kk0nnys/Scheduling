import React from 'react';

import 'css/main.css';
import logo from 'css/images/logo.jpg';
import user1 from 'css/images/user-1.png';
import user2 from 'css/images/user-2.png';
import user3 from 'css/images/user-3.png';

const Main: React.FC = () => {
    return (
        <div id="wrapper">

            <header id="header" className="alt">
                {/* <span className="logo"><img src={logo} alt="" /></span> */}
                <h1>Blue Informática</h1>
                <p><a target="_blank" href="https://www.google.com/maps/place/Blue+Inform%C3%A1tica/@-16.7224468,-43.8625366,15z/data=!4m5!3m4!1s0x0:0xbe0211317ea93a22!8m2!3d-16.7224468!4d-43.8625366">
                    R. Grão Mogol, 61 - Centro, Montes Claros - MG, 39400-056
                    </a>
                </p>
            </header>

            <nav id="nav">
                <ul>
                    <li><a href="#intro" className="active">Quem somos</a></li>
                    <li><a href="#first">Qualidade de atendimento</a></li>
                    <li><a href="#second">Agendamento</a></li>
                    <li><a href="#cta">Rapidez</a></li>
                </ul>
            </nav>

            <div id="main">

                    <section id="intro" className="main">
                        <div className="spotlight">
                            <div className="content">
                                <header className="major">
                                    <h2>Quem somos</h2>
                                </header>
                                <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
                                adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
                                Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
                                <ul className="actions">
                                    <li><a href="" className="button">Saiba mais</a></li>
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
                                <h3>Renato</h3>
                                <p>Perfeito atendimento ❤️</p>
                            </li>
                            <li>
                                <img className='icon major user-icon' src={user3} alt="Usuário"/>
                                <h3>Taíssa Damasceno</h3>
                                <p>Profissional de confiança e serviço de qualidade. Podem confiar.</p>
                            </li>
                            <li>
                                <img className='icon major user-icon' src={user2} alt="Usuário"/>
                                <h3>Fernando Francisco</h3>
                                <p>Ótimo atendimento e música ambiente 👊</p>
                            </li>
                        </ul>
                    </section>

                    <section id="second" className="main special">
                        <header className="major">
                            <h2>Ipsum consequat</h2>
                            <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                            posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
                        </header>
                        <ul className="statistics">
                            <li className="style1">
                                <span className="icon solid fa-code-branch"></span>
                                <strong>5,120</strong> Etiam
                            </li>
                            <li className="style2">
                                <span className="icon fa-folder-open"></span>
                                <strong>8,192</strong> Magna
                            </li>
                            <li className="style3">
                                <span className="icon solid fa-signal"></span>
                                <strong>2,048</strong> Tempus
                            </li>
                            <li className="style4">
                                <span className="icon solid fa-laptop"></span>
                                <strong>4,096</strong> Aliquam
                            </li>
                            <li className="style5">
                                <span className="icon fa-gem"></span>
                                <strong>1,024</strong> Nullam
                            </li>
                        </ul>
                        <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
                        <footer className="major">
                            <ul className="actions special">
                                <li><a href="generic.html" className="button">Learn More</a></li>
                            </ul>
                        </footer>
                    </section>

                    <section id="cta" className="main special">
                        <header className="major">
                            <h2>Congue imperdiet</h2>
                            <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                            posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
                        </header>
                        <footer className="major">
                            <ul className="actions special">
                                <li><a href="generic.html" className="button primary">Get Started</a></li>
                                <li><a href="generic.html" className="button">Learn More</a></li>
                            </ul>
                        </footer>
                    </section>

            </div>

            <footer id="footer">
                <section>
                    <h2>Aliquam sed mauris</h2>
                    <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
                    <ul className="actions">
                        <li><a href="generic.html" className="button">Learn More</a></li>
                    </ul>
                </section>
                <section>
                    <h2>Etiam feugiat</h2>
                    <dl className="alt">
                        <dt>Address</dt>
                        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                        <dt>Phone</dt>
                        <dd>(000) 000-0000 x 0000</dd>
                        <dt>Email</dt>
                        <dd><a href="#">information@untitled.tld</a></dd>
                    </dl>
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon brands fa-dribbble alt"><span className="label">Dribbble</span></a></li>
                    </ul>
                </section>
                <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </footer>
        </div>
    )
}

export default Main;