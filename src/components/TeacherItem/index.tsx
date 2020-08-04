import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = (props) => {
    return (
        <article className="teacher-item">

            <header>

                <img src="https://avatars0.githubusercontent.com/u/33379549?s=460&u=c3583e73cb868be859020da9e55ce23fde890873&v=4" alt="Matheus Brito" />

                <div>
                    <strong>Matheus Brito</strong>
                    <span>Educação física</span>
                </div>
            </header>

            <p>
                Es tratamento accumulado as estremecer industrias offensivas. Seculos fui aos ouvimos fizeram. Obtemperou liquifeito seiscentos eu ti. Te disfarcado encobertas se severidade aferventar iv descaroado. Alta hia nada sem nao quer alas. Comigo tentar um eu subita. Um duvidas explico se os motivos reclama ma quadros inuteis.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 120,00</strong>

                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato" />
                                Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;