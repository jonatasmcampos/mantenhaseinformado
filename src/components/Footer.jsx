import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <hr className='headerHR'/>
            <div className='footer'>
                <p>
                    Site desenvolvido com intuito educacional,
                    para praticar e aplicar conhecimentos de
                    desenvolvimento WEB.
                </p>
                <p>
                    Site para auxiliar professores<br />
                    em aulas remotas.<br />
                    Concentrando informações sobre
                    ferramentas digitais para facilitar a
                    vida do docente.
                </p>
                <p>
                    Curso de graduação em Sistemas de Informação.<br />
                    Extensão Integrada em humanas VI.<br />
                    2021.
                </p>
            </div>
        </footer>
    )
}