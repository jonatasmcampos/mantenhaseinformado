import React from "react"
import './Header.css'
import Logo from './../images/logo.png'

export default function Header() {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('header')
            .classList
            .add('loaded');
    });
    return (
        <>
            <header id="topo">
                <div className='headerDiv'>
                    <div className='texts'>
                        <h1>Mantenha-se Informado</h1>
                        <p> A sala de aula é outra.</p> <br/>
                        <p>
                            Fornecendo conhecimentos sobre as ferramentas digitais
                            que você utiliza no seu dia a dia no ensino remoto
                            para se conectar com seus alunos e para preparar e
                            organizar suas aulas e tarefas.
                        </p>
                    </div>
                    <img className='headerLogo' src={Logo} alt='Logo' />
                </div>
            </header>
            <hr className='headerHR' />
        </>
    )
}