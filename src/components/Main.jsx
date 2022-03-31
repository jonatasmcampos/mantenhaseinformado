import './Main.css'
import Card from './../components/cardGoogleTools/Card'
import LogoZoom from './../images/logoZoom.png'
import LogoGoogleMeet from './../images/logoGoogleMeet.png'
import LogoMicrosoftTeams from './../images/logoMicrosoftTeams.png'
import Button from './button/Button'
import LogoGoConqr from './../images/logoGoConqr.png'
import ImgGoConqr from './../images/imgGoConqr.png'
import LogoTrello from './../images/logoTrello.png'
import ImgTrello from './../images/imgTrello.png'
import LogoGoogleClassroom from './../images/logoGoogleClassroom.png'
import ImgGoogleClassroom from './../images/imgGoogleClassroom.png'
import LogoEscolaDigital from './../images/logoEscolaDigital.png'
import ImgEscolaDigital from './../images/imgEscolaDigital.png'
import LogoGmail from './../images/logoGmail.png'
import LogoGCalendar from './../images/logoGoogleCalendar.png'
import LogoGDrive from './../images/logoGoogleDrive.png'
import LogoGChat from './../images/logoGoogleChat.png'
import LogoGDocs from './../images/logoGoogleDocs.png'
import LogoGSheets from './../images/logoGoogleSheets.png'
import LogoGSlides from './../images/logoGoogleSlides.png'
import LogoGForms from './../images/logoGoogleForms.png'
import Item from './Item'
import React from 'react'
import { useState } from "react";
import ReactElasticCarousel from 'react-elastic-carousel'


export default function Main() {
    const linksForButtons = {
        irParaZoom: "https://zoom.us/",
        capacitacaoZoom: "https://success.zoom.us/rec/play/N-ZTeZ1ilIFb0vqaeawDxCg99SojdzW9XtBjg4vSVV2YxHZbwP-0JooL97QTuTcsIsHEe_txT5VnHipn.uZIXuCb0UZPSCU4l?continueMode=true&_x_zm_rtaid=XyNfc8dlQYC1uG0n6uSWtg.1628942468309.b32c2f40a6c107105bb5b72154caa06d&_x_zm_rhtaid=734",
        centralAjudaZoom: "https://support.zoom.us/hc/pt-br?_ga=2.142082673.210812303.1628946026-1779077322.1628946026",
        irParaGooleMeet: "https://meet.google.com/",
        capacitacaoGoogleMeet: "https://edu.google.com/intl/ALL_br/teacher-center/training/?modal_active=none",
        centralAjudaGoogleMeet: "https://support.google.com/meet/?hl=pt-BR#topic=7306097",
        TutorialPDFGoogleMeet: "https://services.google.com/fh/files/misc/google-meet-toolkit_pt-br.pdf",
        irParaMicrosoftTeams: "https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software",
        informacoesMicrosoftTeams: "https://support.microsoft.com/pt-br/topic/criando-participando-e-executando-reuni%C3%B5es-utilizando-o-teams-para-aprendizagem-remota-788d730f-2c7e-4761-a059-c9b3fe87adf7",
        centralAjudaMicrosoftTeams: "https://support.microsoft.com/pt-br/teams",
        irParaSiteGoConqr: "https://www.goconqr.com/pt",
        comoUsarGoConqr: "https://www.goconqr.com/pt/faq/54-Guia/301-Como-usar-as-ferramentas-de-GoConqr%3F",
        irParaSiteTrello: "https://trello.com/pt-BR",
        guiaTrello: "https://trello.com/guide",
        irParaSiteGoogleSalaDeAula: "https://edu.google.com/intl/ALL_br/products/classroom/",
        centralAjudaGoogleSalaDeAula: "https://support.google.com/edu/classroom/?hl=pt-BR#topic=10298088",
        irParaSiteEscolaDigital: "https://escoladigital.org.br/",
        centralAjudaEscolaDigital: "https://escoladigital.org.br/ajuda",
        comousarGmail: "https://support.google.com/mail/#topic=7065107",
        comousarAgenda: "https://support.google.com/calendar/#topic=10509740",
        comousarDrive: "https://support.google.com/drive/answer/2424384?hl=pt-BR&ref_topic=14940",
        comousarChat: "https://support.google.com/chat/?hl=pt-BR#topic=7649316",
        comousarDocumentos: "https://support.google.com/docs/topic/9046002",
        comousarPlanilhas: "https://support.google.com/docs/topic/9054603",
        comousarApresentacoes: "https://support.google.com/docs/topic/9052835",
        comousarFormularios: "https://support.google.com/docs/topic/9055404"
    }

    function toWhere(id) {
        switch (id) {
            // CARD ZOOOM -----------------------------------
            case '1':
                window.open(linksForButtons.irParaZoom);
                break;
            case '2':
                window.open(linksForButtons.capacitacaoZoom);
                break;
            case '3':
                window.open(linksForButtons.centralAjudaZoom)
                break;
            // CARD GOOGLE MEET-----------------------------------
            case '4':
                window.open(linksForButtons.irParaGooleMeet)
                break;
            case '5':
                window.open(linksForButtons.capacitacaoGoogleMeet)
                break;
            case '6':
                window.open(linksForButtons.TutorialPDFGoogleMeet)
                break;
            case '7':
                window.open(linksForButtons.centralAjudaGoogleMeet)
                break;
            // CARD MICROSOFT TEAMS-----------------------------------
            case '8':
                window.open(linksForButtons.irParaMicrosoftTeams)
                break;
            case '9':
                window.open(linksForButtons.informacoesMicrosoftTeams)
                break;
            case '10':
                window.open(linksForButtons.centralAjudaMicrosoftTeams)
                break;
            // GOCONQR -----------------------------------
            case '11':
                window.open(linksForButtons.irParaSiteGoConqr)
                break;
            case '12':
                window.open(linksForButtons.comoUsarGoConqr)
                break;
            // TRELLO -----------------------------------
            case '13':
                window.open(linksForButtons.irParaSiteTrello)
                break;
            case '14':
                window.open(linksForButtons.guiaTrello)
                break;
            // GOOGLE SALA DE AULA -----------------------------------
            case '15':
                window.open(linksForButtons.irParaSiteGoogleSalaDeAula)
                break;
            case '16':
                window.open(linksForButtons.centralAjudaGoogleSalaDeAula)
                break;
            // FERRAMENTAS GOOGLE  -----------------------------------
            case '17':
                window.open(linksForButtons.comousarGmail)
                break;
            case '18':
                window.open(linksForButtons.comousarAgenda)
                break;
            case '19':
                window.open(linksForButtons.comousarDrive)
                break;
            case '20':
                window.open(linksForButtons.comousarChat)
                break;
            case '21':
                window.open(linksForButtons.comousarDocumentos)
                break;
            case '22':
                window.open(linksForButtons.comousarPlanilhas)
                break;
            case '23':
                window.open(linksForButtons.comousarApresentacoes)
                break;
            case '24':
                window.open(linksForButtons.comousarFormularios)
                break;

            // CARD ESCOLA DIGITAL

            case '25':
                window.open(linksForButtons.irParaSiteEscolaDigital)
                break;
            case '26':
                window.open(linksForButtons.centralAjudaEscolaDigital)
                break;

            default:
                alert('Erro!')
                break;
        }
    }

    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 550, itemToShow: 2 },
        { width: 768, itemToShow: 3 },
        { width: 1200, itemToShow: 4 }
    ]


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <main>
            <h1>Conecte-se</h1>
            <p>Abaixo você encontra algumas informações sobre a utilização de ferramentas de videochamada.</p>
            <br />
            <div className='container'>


                {/* Cards aqui */}
            <div className='container0'>

                <div className="bloc-tabs">
                    <div 
                        onClick={() => toggleTab(1)} 
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>
                           
                            <img className='tags-img-zoom' src={LogoZoom} alt='Logo do Zoom' />
                           
                    </div>
                    <div 
                        onClick={() => toggleTab(2)} 
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>
                            
                            <img className='tags-img-meet' src={LogoGoogleMeet} alt='Logo do Google meet' />
                           
                    </div>
                    <div 
                        onClick={() => toggleTab(3)} 
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}>
                            
                            <img className='tags-img-teams' src={LogoMicrosoftTeams} alt='Logo do Teams' />
                           
                    </div>
                </div>

                <div 
                    className={toggleState === 1 ? "content active-content card zoom" : "content card zoom"}
                >

                    {/* Card Zoom */}
                    <div className='imageTextDiv'>
                        <img src={LogoZoom} alt='Logo do Zoom' />
                        <hr />
                        <p>
                            Fornece serviços de vídeocomunicação e
                            chat online, é usado para teleconferência,
                            trabalho à distância, educação à distância
                            e relações sociais.
                        </p>
                    </div>
                    <div className='btnDiv'>
                        <Button zoomBtn id='1' label="Ir para o Zoom" click={toWhere} /> <br />
                        <Button zoomBtn largerBtn id='2' label="Capacitação para usuários Zoom" click={toWhere} /> <br />
                        <Button zoomBtn id='3' label="Central de Ajuda" click={toWhere} />
                    </div>
                    <div className="linksDiv">
                        <hr />
                        <p>Saiba como:</p>
                        <a href="https://support.zoom.us/hc/pt-br/articles/201362613-Como-realizo-uma-reuni%C3%A3o-por-v%C3%ADdeo-" target="_blank" rel="noreferrer"><span>►</span> Criar uma reunião.</a><br />
                        <a href="https://support.zoom.us/hc/pt-br/articles/201362413-Agendamento-de-reuni%C3%B5es" target="_blank" rel="noreferrer"><span>►</span> Agendar uma reunião.</a><br />
                        <a href="https://support.zoom.us/hc/pt-br/articles/201362193-Como-ingressar-em-uma-reuni%C3%A3o" target="_blank" rel="noreferrer"><span>►</span> Ingressar em uma reunião.</a><br />
                        <a href="https://support.zoom.us/hc/pt-br/articles/201362473-Grava%C3%A7%C3%A3o-local" target="_blank" rel="noreferrer"><span>►</span> Gravar uma reunião.</a><br />
                        <a href="https://support.zoom.us/hc/pt-br/articles/201362183-Como-convidar-outras-pessoas-para-ingressar-em-uma-reuni%C3%A3o" target="_blank" rel="noreferrer"><span>►</span> Convidar pessoas para uma reunião.</a><br />
                        <a href="https://support.zoom.us/hc/pt-br/articles/201362603-Controles-do-anfitri%C3%A3o-em-uma-reuni%C3%A3o" target="_blank" rel="noreferrer"><span>►</span> Controles de um anfitrião sobre uma reunião.</a>
                    </div>
                </div>

                <div 
                    className={toggleState === 2 ? 'content active-content card googleMeet' : "content card googleMeet"}
                >
                    {/* Card Google Meet */}
                    <div className='imageTextDiv'>
                        <img src={LogoGoogleMeet} alt='Logo do Google Meet' />
                        <hr />
                        <p>
                            O Google Meet é um serviço de
                            videocomunicação. Conecte-se, colabore e
                            celebre com segurança de qualquer lugar.
                        </p>
                    </div>
                    <div className='btnDiv'>
                        <Button googleMeetBtnY id='4' label="Ir para o Google Meet" click={toWhere} /> <br />
                        <Button googleMeetBtnG largerBtn id='5' label="Curso de treinamento para professores" click={toWhere} /> <br />
                        <Button googleMeetBtnR id='6' label="Tutorial PDF" click={toWhere} />
                        <Button googleMeetBtnB id='7' label="Central de Ajuda" click={toWhere} />
                    </div>
                    <div className="linksDiv">
                        <hr />
                        <p>Saiba como:</p>
                        <a href="https://support.google.com/meet/answer/9302870?hl=pt-BR&co=GENIE.Platform%3DAndroid" target="_blank" rel="noreferrer"><span>►</span> Criar uma reunião.</a><br />
                        <a href="https://support.google.com/meet/answer/9303069?hl=pt-BR&ref_topic=7192926" target="_blank" rel="noreferrer"><span>►</span> Ingressar em uma reunião.</a><br />
                        <a href="https://support.google.com/meet/answer/9303164?hl=pt-BR&ref_topic=7192926" target="_blank" rel="noreferrer"><span>►</span> Adicionar ou remover pessoas na reunião.</a><br />
                        <a href="https://support.google.com/meet/answer/9308681?hl=pt-BR" target="_blank" rel="noreferrer"><span>►</span> Gravar uma reunião.</a><br />
                        <a href="https://support.google.com/meet/answer/9308856?hl=pt-BR&co=GENIE.Platform%3DAndroid" target="_blank" rel="noreferrer"><span>►</span> Compartilhar tela em uma reunião.</a><br />
                    </div>
                </div>

                <div 
                    className={toggleState === 3 ? 'content active-content card microsoftTeams' : "content card microsoftTeams"}
                >
                    {/* Card Microsoft Teams */}
                    <div className='imageTextDiv'>
                        <img src={LogoMicrosoftTeams} alt='Logo do Microsoft Teams' />
                        <hr />
                        <p>
                            Reuniões, conversas, chamadas e
                            colaboração em um só lugar.
                        </p>
                    </div>
                    <div className='btnDiv'>
                        <Button microsoftTeamsBtn id='8' label="Ir para o Microsoft Teams" click={toWhere} /><br />
                        <Button microsoftTeamsBtn id='9' label="Informações" click={toWhere} />
                        <Button microsoftTeamsBtn id='10' label="Central de Ajuda" click={toWhere} />
                    </div>
                    <div className="linksDiv">
                        <hr />
                        <p>Saiba como:</p>
                        <a href="https://support.microsoft.com/pt-br/office/agendar-uma-reuni%C3%A3o-no-microsoft-teams-943507a9-8583-4c58-b5d2-8ec8265e04e5" target="_blank" rel="noreferrer"><span>►</span> Agendar uma reunião.</a><br />
                        <a href="https://support.microsoft.com/pt-br/office/ingressar-em-uma-reuni%C3%A3o-no-teams-1613bb53-f3fa-431e-85a9-d6a91e3468c9" target="_blank" rel="noreferrer"><span>►</span> Ingressar em uma reunião.</a><br />
                        <a href="https://support.microsoft.com/pt-pt/office/gravar-uma-reuni%C3%A3o-no-teams-34dfbe7f-b07d-4a27-b4c6-de62f1348c24?ui=pt-pt&rs=pt-pt&ad=pt" target="_blank" rel="noreferrer"><span>►</span> Gravar uma reunião.</a><br />
                        <a href="https://support.microsoft.com/pt-br/office/convidar-pessoas-para-uma-reuni%C3%A3o-no-teams-4bc5981c-446e-4e93-866a-d757466b556a" target="_blank" rel="noreferrer"><span>►</span> Convidar pessoas para uma reunião.</a><br />
                        <a href="https://support.microsoft.com/pt-br/office/compartilhar-conte%C3%BAdo-em-uma-reuni%C3%A3o-no-teams-fcc2bf59-aecd-4481-8f99-ce55dd836ce8" target="_blank" rel="noreferrer"><span>►</span> Compartilhar tela em uma reunião.</a><br />
                        <a href="https://support.microsoft.com/pt-br/office/compartilhar-som-do-seu-computador-em-uma-reuni%C3%A3o-teams-ou-evento-ao-vivo-dddede9f-e3d0-4330-873a-fa061a0d8e3b" target="_blank" rel="noreferrer"><span>►</span> Compartilhar som do seu computador em uma reunião.</a><br />
                    </div>
                </div>

            </div>
                {/* end Cards aqui */}

            </div>

            {/* Prepare e organize */}

            <h1>Prepare e organize</h1>
            <div className='container2'>

                {/* FERRAMENTAS GOOGLE */}
                <h2 className='centro'>Ferramentas de produtividade e colaboração do Google.</h2>
                
                <div className='item-carousel-mobile'>
                    <ReactElasticCarousel>
                            <Item>
                                <Card
                                    logoPath={LogoGDocs}
                                    logoAlt='Logo do Google Documentos'
                                    label='Com o Documentos, você pode redigir relatórios, criar propostas de
                                    projetos conjuntos, acompanhar atas de reunião e muito mais.'
                                    logoW
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='21' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            <Item>
                                <Card
                                    logoPath={LogoGSheets}
                                    logoAlt='Logo do Google Planilhas'
                                    label='Com o Planilhas, você pode gerenciar listas de tarefas, criar planos de
                                    projetos, analisar dados com gráficos e filtros e muito mais.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='22' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            <Item>
                                <Card
                                    logoPath={LogoGSlides}
                                    logoAlt='Logo do Google Apresentações'
                                    label='No Apresentações, você pode criar apresentações de argumento de
                                    venda, projetos, módulos de treinamento e muito mais.'
                                    logoW
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='23' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            <Item>
                                <Card
                                    logoPath={LogoGForms}
                                    logoAlt='Logo do Google Formulários'
                                    label='No Formulários, você pode gerenciar inscrições em eventos, criar testes,
                                    analisar respostas e muito mais.'
                                    logoW
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='24' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            
                            
                            <Item>
                                <Card
                                    logoPath={LogoGmail}
                                    logoAlt='Logo do Gmail'
                                    label='No Gmail, você pode enviar e pesquisar mensagens, organizar sua
                                    Caixa de entrada e conversar usando os recursos integrados de chat e videochamada.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='17' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>

                            <Item>
                                <Card
                                    logoPath={LogoGCalendar}
                                    logoAlt='Logo do Google Agenda'
                                    label='No Agenda, você pode acompanhar eventos importantes, compartilhar seus
                                    compromissos e criar várias programações.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='18' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>

                            <Item>
                                <Card
                                    logoPath={LogoGDrive}
                                    logoAlt='Logo do Google Drive'
                                    label='No Drive, você mantém tudo em um só lugar, visualiza diferentes
                                    formatos de arquivo sem comprar outros softwares e acessa os
                                    arquivos em qualquer dispositivo.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='19' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            <Item>
                                <Card
                                    logoPath={LogoGChat}
                                    logoAlt='Logo do Google Chat'
                                    label='No Chat, você pode fazer perguntas rápidas, colaborar em chats em
                                    grupo, criar salas virtuais para projetos em equipe e muito mais.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='20' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>

                    </ReactElasticCarousel>
                </div>

                <div className='item-carousel-web'>

                    <ReactElasticCarousel breakPoints={breakPoints}>

                        <div className='item-carousel'>
                            <Item>
                                <Card
                                    logoPath={LogoGDocs}
                                    logoAlt='Logo do Google Documentos'
                                    label='Com o Documentos, você pode redigir relatórios, criar propostas de
                                    projetos conjuntos, acompanhar atas de reunião e muito mais.'
                                    logoW
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='21' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            <Item>
                                <Card
                                    logoPath={LogoGSheets}
                                    logoAlt='Logo do Google Planilhas'
                                    label='Com o Planilhas, você pode gerenciar listas de tarefas, criar planos de
                                    projetos, analisar dados com gráficos e filtros e muito mais.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='22' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            <Item>
                                <Card
                                    logoPath={LogoGSlides}
                                    logoAlt='Logo do Google Apresentações'
                                    label='No Apresentações, você pode criar apresentações de argumento de
                                    venda, projetos, módulos de treinamento e muito mais.'
                                    logoW
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='23' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            <Item>
                                <Card
                                    logoPath={LogoGForms}
                                    logoAlt='Logo do Google Formulários'
                                    label='No Formulários, você pode gerenciar inscrições em eventos, criar testes,
                                    analisar respostas e muito mais.'
                                    logoW
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='24' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                        </div>
                        <div className='item-carousel'>

                            <Item>
                                <Card
                                    logoPath={LogoGmail}
                                    logoAlt='Logo do Gmail'
                                    label='No Gmail, você pode enviar e pesquisar mensagens, organizar sua
                                    Caixa de entrada e conversar usando os recursos integrados de chat e videochamada.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='17' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>

                            <Item>
                                <Card
                                    logoPath={LogoGCalendar}
                                    logoAlt='Logo do Google Agenda'
                                    label='No Agenda, você pode acompanhar eventos importantes, compartilhar seus
                                    compromissos e criar várias programações.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='18' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>

                            <Item>
                                <Card
                                    logoPath={LogoGDrive}
                                    logoAlt='Logo do Google Drive'
                                    label='No Drive, você mantém tudo em um só lugar, visualiza diferentes
                                    formatos de arquivo sem comprar outros softwares e acessa os
                                    arquivos em qualquer dispositivo.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='19' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                            <Item>
                                <Card
                                    logoPath={LogoGChat}
                                    logoAlt='Logo do Google Chat'
                                    label='No Chat, você pode fazer perguntas rápidas, colaborar em chats em
                                    grupo, criar salas virtuais para projetos em equipe e muito mais.'
                                />
                                <br />
                                <div className='divCardBtn'>
                                    <Button id='20' btnTools label='Como usar' click={toWhere} />
                                </div>
                            </Item>
                        </div>

                    </ReactElasticCarousel>
                </div>

                <div className='divToolsLinks'>
                    <a href="https://support.google.com/drive/answer/2494822?hl=pt-BR&co=GENIE.Platform%3DDesktop#zippy=" target="_blank" rel="noreferrer">
                        <span>►</span> <b>Compartilhar arquivos para uso em grupo.</b>
                        Clicando aqui você vai saber como você e outra pessoa podem digitar ou alterar, por exemplo,
                        em um mesmo arquivo.
                    </a>
                </div>
                {/* FERRAMENTAS GOOGLE */}

                <hr /> <br />

                <div className='divTools'>
                    <div className='divImageTools'>
                        <img src={ImgGoConqr} alt='Imagem do GoConqr' className='imgTools' />
                    </div>
                    <div>
                        <img src={LogoGoConqr} alt='logo do GoConqr' className='logoOnTheLeft' />
                        <p>
                            &nbsp; Fornece materiais como mapas mentais, flashcards, quizzes e slides.
                            Também há recursos prontos, os quais você também poderá utilizar.<br /><br />
                            &nbsp; Esta ferramenta possui uma biblioteca com 9 milhões de materiais criados pelos membros,
                            podendo ser usados de forma gratuita! Também é possível acompanhar o progresso dos
                            estudantes, analisando o resultado obtido com cada recurso.
                        </p>
                        <div className='divToolsBtn'>
                            <Button id='11' btnTools label='Ir para o site' click={toWhere} />
                            <Button id='12' btnTools label='Como usar as ferramentas do GoConqr' click={toWhere} />
                        </div>
                    </div>
                </div>

                <hr />

                <div className='divTools'>
                    <div className='divImageToolsLeft'>
                        <img src={ImgTrello} alt='Imagem do Trello' className='imgTools' />
                    </div>
                    <div>
                        <img src={LogoTrello} alt='logo do Trello' className='logoOnTheRight' />
                        <p>
                            &nbsp; Trello é ótimo no gerenciamento de duas atividades. Nela, você consegue criar
                            cards com as tarefas, colocar seus prazos de entrega, marcá-las de acordo com etapas,
                            anexar arquivos também é possível, colocar etiquetas com o estado das atividades
                            e adicionar membros. <br /> <br /> &nbsp; Você ainda pode ter uma parte que contenha
                            somente suas atividades e outras para cada uma das suas turmas. Administrar trabalhos
                            em grupo, interdisciplinares e quaisquer outras entregas que os alunos tenham que
                            fazer.
                        </p>
                        <div className='divToolsBtn'>
                            <Button id='13' btnTools label='Ir para o site' click={toWhere} />
                            <Button id='14' btnTools label='Guia Trello' click={toWhere} />
                        </div>
                    </div>
                </div>

                <hr />

                <div className='divTools'>
                    <div className='divImageTools'>
                        <img src={ImgGoogleClassroom} alt='Imagem do Google Sala de Aula' className='imgTools' />
                    </div>
                    <div>
                        <img src={LogoGoogleClassroom} alt='logo do Google Sala de Aula' className='logoOnTheLeft' />
                        <p>
                            &nbsp; Esta plataforma te da a possibilidade de gerenciar atividades, avaliações e
                            conteúdos iguais ao de uma sala de aula. Você apenas precisa criar uma classe e
                            adicionar os alunos via e-mail e começar os trabalhos. É possível anexar links,
                            arquivos, enviar e receber os trabalhos. Você pode usar o Google Sala
                            de Aula na sua escola para simplificar as atividades, aumentar a colaboração
                            e melhorar a comunicação.
                        </p>
                        <div className='divToolsBtn'>
                            <Button id='15' btnTools label='Ir para o site' click={toWhere} />
                            <Button id='16' btnTools label='Central de Ajuda' click={toWhere} />
                        </div>
                        <div className='divToolsLinks'>
                            <a href="https://support.google.com/edu/classroom/answer/6020273?hl=pt-BR&ref_topic=9049835" target="_blank" rel="noreferrer"><span>►</span> Criar, participar e organizar suas turmas.</a><br />
                            <a href="https://support.google.com/edu/classroom/answer/6020265?hl=pt-BR&ref_topic=9049978" target="_blank" rel="noreferrer"><span>►</span> Criar, acompanhar e atribuir nota às atividades.</a><br />
                            <a href="https://support.google.com/edu/classroom/answer/6025210?hl=pt-BR&ref_topic=6024979" target="_blank" rel="noreferrer"><span>►</span> Comunicação com a turma e os responsáveis.</a><br />
                        </div>
                    </div>
                </div>

                <hr /> <br />

                <div className='divTools'>
                    <div className='divImageTools'>
                        <img src={ImgEscolaDigital} alt='Imagem do Escola Digital' className='imgTools' />
                    </div>
                    <div>
                        <img src={LogoEscolaDigital} alt='logo do Escola Digital' className='logoOnTheLeft' />
                        <p>
                            &nbsp;&nbsp;É uma plataforma gratuita de busca que oferece a professores, gestores e
                            redes de ensino mais de 30 mil recursos digitais de aprendizagem, que
                            proporcionam interatividade, dinamismo e inovação às práticas pedagógicas!<br /><br />
                            <b>Quais são os principais benefícios da plataforma?</b><br />
                            - Apoia as práticas pedagógicas;<br />
                            - Desenvolve os professores e gestores para o uso da
                            tecnologia em sala de aula;<br />
                            - Oferece um acervo diferenciado de conteúdos e
                            formatos;<br />
                            - Possui planos de aula e objetos digitais de aprendizagem
                            (ODAs) alinhados à BNCC.<br /><br /><br />
                            <b>Que tipos de materiais estão disponíveis na Escola Digital?</b> <br />
                            &nbsp;&nbsp;A Escola Digital funciona como um amplo repositório, organizado com base nos
                            parâmetros curriculares nacionais. São vídeos, plataformas, games, animações,
                            videoaulas, infográficos, mapas, entre outros, categorizados por série, disciplina,
                            tema, tipo de mídia, idioma, versão on-line e off-line, licença de uso, se possuem
                            ferramentas de acessibilidade, entre outras especificidades.<br /> &nbsp;&nbsp;O site também indica
                            recursos digitais capazes de apoiar a criação de novos objetos de aprendizagem,
                            o trabalho com temas transversais e a realização de projetos na comunidade, entre
                            outras possibilidades educativas. Todos os links dos recursos indicados levam
                            diretamente ao site de origem do recurso.
                        </p>
                        <div className='divToolsBtn'>
                            <Button id='25' btnTools label='Ir para o site' click={toWhere} />
                            <Button id='26' btnTools label='Central de Ajuda' click={toWhere} />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}