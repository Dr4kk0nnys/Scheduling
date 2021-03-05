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
                    <dd><a rel='noreferrer' target="_blank" href="https://www.google.com/maps/place/Blue+Inform%C3%A1tica/@-16.7224468,-43.8625366,15z/data=!4m5!3m4!1s0x0:0xbe0211317ea93a22!8m2!3d-16.7224468!4d-43.8625366">
                    R. Grão Mogol, 61 - Centro, Montes Claros - MG</a>
                    </dd>
                    <dt>Telefone</dt>
                    <dd>(38) 9 9132 - 6330</dd>
                    <dt>Email</dt>
                    <dd><a href="#">bluenaweb@gmail.com</a></dd>
                </dl>
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
                </ul>
            </section>
            <p className="copyright">&copy; Blue Informática. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;