import React, { useState } from 'react';

import Footer from 'components/client/Footer';

import { sendPost } from 'utils/schedule';

import 'css/main.css';

const Schedule: React.FC = () => {
    const [contact, setContact] = useState('');
    const [problem, setProblem] = useState('');
    const [date, setDate] = useState('');

    const handleClick = async () => {
        await sendPost({ contact, problem, date });

        // TODO: Show success / error message.
    }

    return (
			<div id="wrapper">
                <header id="header">
                    <h1>Agendar</h1>
                    <p><a target="_blank" rel='noreferrer' href="#">[endereço da sua empresa + link para o google maps]</a>
                    </p>
                </header>

                <div id="main">
                        <section id="content" className="main">
                            <span className="image main"><img src="images/pic04.jpg" alt="" /></span>
                            
                            <input value={contact} onChange={(event: any) => setContact(event.target.value)} className='schedule-input' placeholder="E-mail ou número para contato" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required />
                            <input value={problem} onChange={(event: any) => setProblem(event.target.value)} className='schedule-input' placeholder="Problema / Defeito" type="text" required />
                            <input value={date} onChange={(event: any) => setDate(event.target.value)} className='schedule-input' placeholder="Dia e hora de ida" type="text" required />

                            <footer className="major">
                                <ul className="actions special">
                                    <li><button onClick={async () => await handleClick()} className='button primary'>Agendar</button></li>
                                </ul>
                            </footer>
                        </section>
                </div>

                <Footer />
			</div>
    )
}

export default Schedule;