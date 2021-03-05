import React from 'react';

import Footer from 'components/client/Footer';

import 'css/admin/main.css';
import 'js/panel.js';

const Panel: React.FC = () => {
    return (
        <div id="wrapper">

            <header id="header" className="alt">
                <h1>Blue Informática</h1>
                <p><a target="_blank" rel='noreferrer' href="https://www.google.com/maps/place/Blue+Inform%C3%A1tica/@-16.7224468,-43.8625366,15z/data=!4m5!3m4!1s0x0:0xbe0211317ea93a22!8m2!3d-16.7224468!4d-43.8625366">
                    R. Grão Mogol, 61 - Centro, Montes Claros - MG, 39400-056
                    </a>
                </p>
            </header>

            <nav id="nav">
                <ul>
                    <li><a href="#intro" className="active">Admin</a></li>
                </ul>
            </nav>

            <div id="main">
                <section id="intro" className="main">
                    <div className="cd-schedule loading">
                        <div className="timeline">
                            <ul>
                                <li><span>09:00</span></li>
                                <li><span>09:30</span></li>
                                <li><span>10:00</span></li>
                                <li><span>10:30</span></li>
                                <li><span>11:00</span></li>
                                <li><span>11:30</span></li>
                                <li><span>12:00</span></li>
                                <li><span>12:30</span></li>
                                <li><span>13:00</span></li>
                                <li><span>13:30</span></li>
                                <li><span>14:00</span></li>
                                <li><span>14:30</span></li>
                                <li><span>15:00</span></li>
                                <li><span>15:30</span></li>
                                <li><span>16:00</span></li>
                                <li><span>16:30</span></li>
                                <li><span>17:00</span></li>
                                <li><span>17:30</span></li>
                                <li><span>18:00</span></li>
                            </ul>
                        </div>

                        <div className="events">
                            <ul className="wrap">
                                <li className="events-group">
                                    <div className="top-info"><span>Segunda</span></div>
                                    <ul>
                                        <li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Formatação</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="11:00" data-end="12:30" data-content="event-rowing-workout" data-event="event-2">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Reparo</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="14:00" data-end="15:15"  data-content="event-yoga-1" data-event="event-3">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Upgrade</em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="events-group">
                                    <div className="top-info"><span>Terça</span></div>

                                    <ul>
                                        <li className="single-event" data-start="10:00" data-end="11:00"  data-content="event-rowing-workout" data-event="event-2">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Reparo</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="11:30" data-end="13:00"  data-content="event-restorative-yoga" data-event="event-4">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Outro</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="13:30" data-end="15:00" data-content="event-abs-circuit" data-event="event-1">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Formatação</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="15:45" data-end="16:45"  data-content="event-yoga-1" data-event="event-3">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Upgrade</em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="events-group">
                                    <div className="top-info"><span>Quarta</span></div>

                                    <ul>
                                        <li className="single-event" data-start="09:00" data-end="10:15" data-content="event-restorative-yoga" data-event="event-4">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Outro</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="10:45" data-end="11:45" data-content="event-yoga-1" data-event="event-3">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Upgrade</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="12:00" data-end="13:45"  data-content="event-rowing-workout" data-event="event-2">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Reparo</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="13:45" data-end="15:00" data-content="event-yoga-1" data-event="event-3">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Upgrade</em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="events-group">
                                    <div className="top-info"><span>Quinta</span></div>

                                    <ul>
                                        <li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Formatação</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="12:00" data-end="13:45" data-content="event-restorative-yoga" data-event="event-4">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Outro</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="15:30" data-end="16:30" data-content="event-abs-circuit" data-event="event-1">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Formatação</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="17:00" data-end="18:30"  data-content="event-rowing-workout" data-event="event-2">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Reparo</em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="events-group">
                                    <div className="top-info"><span>Sexta</span></div>

                                    <ul>
                                        <li className="single-event" data-start="10:00" data-end="11:00"  data-content="event-rowing-workout" data-event="event-2">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Reparo</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="12:30" data-end="14:00" data-content="event-abs-circuit" data-event="event-1">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Formatação</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="15:45" data-end="16:45"  data-content="event-yoga-1" data-event="event-3">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Upgrade</em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                        <li className="events-group">
                                    <div className="top-info"><span>Sábado</span></div>
                                    <ul>
                                        <li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Formatação</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="11:00" data-end="12:30" data-content="event-rowing-workout" data-event="event-2">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Reparo</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="14:00" data-end="15:15"  data-content="event-yoga-1" data-event="event-3">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Upgrade</em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                        
                        <li className="events-group">
                                    <div className="top-info"><span>Domingo</span></div>
                                    <ul>
                                        <li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Formatação</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="11:00" data-end="12:30" data-content="event-rowing-workout" data-event="event-2">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Reparo</em>
                                            </a>
                                        </li>

                                        <li className="single-event" data-start="14:00" data-end="15:15"  data-content="event-yoga-1" data-event="event-3">
                                            <a href="#0">
                                                <em className="event-name-panel-admin">Upgrade</em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="event-modal">
                            <header className="header">
                                <div className="content">
                                    <span className="event-date"></span>
                                    <h3 className="event-name-panel-admin"></h3>
                                </div>

                                <div className="header-bg"></div>
                            </header>

                            <div className="body">
                                <div className="event-info"></div>
                                <div className="body-bg"></div>
                            </div>

                            <a href="#0" className="close">Close</a>
                        </div>

                        <div className="cover-layer"></div>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Panel;