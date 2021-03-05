import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <section>
                <h2>Serviço de qualidade</h2>
                <p>Alinhando serviço de qualidade com dedicação e velocidade na entrega. A nossa equipe se desponibiliza a sempre prestar o melhor serviço. Não importa a condição!</p>
                <ul className="actions">
                    <li><a href="#" className="button">Saiba mais</a></li>
                </ul>
            </section>
            <section>
                <h2>Entre em contato</h2>
                <dl className="alt">
                    <dt>Endereço</dt>
                    <dd><a rel='noreferrer' target="_blank" href="#">[endereço da sua empresa + link para o google maps]</a>
                    </dd>
                    <dt>Telefone</dt>
                    <dd>(38) 9 0000 - 0000</dd>
                    <dt>Email</dt>
                    <dd><a href="#">email@gmail.com</a></dd>
                </dl>
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
                </ul>
            </section>
            <p className="copyright">&copy; [nome da empresa]. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;