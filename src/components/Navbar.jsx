import React from "react"
import './Navbar.css'

import LogoZoom from './../images/zoom.png'
import LogoGoogleMeet from './../images/googlemeet.png'
import LogoMicrosoftTeams from './../images/teams.png'
import LogoGoogle from './../images/google.png'
import LogoGoconqr from './../images/goconqr.png'
import LogoTrello from './../images/trello.png'
import LogoClassroom from './../images/classroom.png'
import LogoEscolaDigital from './../images/escoladigital.png'

export default function Navbar() {
    return (
        <>
            <nav id="navbar">
                <a href="#conecte-se">
                    <img src={LogoZoom} alt="Icone do zoom" className="zoomnav"/>
                </a>

                <a href="#conecte-se">
                    <img src={LogoGoogleMeet} alt="Icone do google meet" />
                </a>

                <a href="#conecte-se">
                    <img src={LogoMicrosoftTeams} alt="Icone do microsoft teams" />
                </a>
                
                <a href="#prepare-organize">
                    <img src={LogoGoogle} alt="Icone do googel para ferramentas google" />
                </a>
                

                <a href="#goconqr">
                    <img src={LogoGoconqr} alt="Icone do goconqr" className="goconqr" />
                </a>

                <a href="#trello">
                    <img src={LogoTrello} alt="Icone do trello" className="trello"/>
                </a>

                <a href="#classroom">
                    <img src={LogoClassroom} alt="Icone do google sala de aula" className="classroom"/>
                </a>

                <a href="#escoladigital">
                    <img src={LogoEscolaDigital} alt="Icone do escola digital" className="classroom"/> 
                </a> 
                
            </nav>
        </>
    )
}