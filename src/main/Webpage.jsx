import React, { Component } from "react"
import Header from './../components/Header'
import Main from './../components/Main'
import Footer from './../components/Footer'

export default class Webpage extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}