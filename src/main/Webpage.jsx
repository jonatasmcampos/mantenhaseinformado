import React, { Component } from "react"
import Header from './../components/Header'
import Main from './../components/Main'
import Footer from './../components/Footer'
import Navbar from './../components/Navbar'

export default class Webpage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}