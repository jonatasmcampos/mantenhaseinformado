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
                <img src={LogoZoom} alt="Icone do zoom" className="zoomnav"/>
                <img src={LogoGoogleMeet} alt="Icone do google meet" />
                <img src={LogoMicrosoftTeams} alt="Icone do microsoft teams" />
                <img src={LogoGoogle} alt="Icone do googel para ferramentas google" />
                <img src={LogoGoconqr} alt="Icone do goconqr" className="goconqr" />
                <img src={LogoTrello} alt="Icone do trello" className="trello"/>
                <img src={LogoClassroom} alt="Icone do google sala de aula" className="classroom"/>
                <img src={LogoEscolaDigital} alt="Icone do escola digital" className="classroom"/>
            </nav>
        </>
    )
}