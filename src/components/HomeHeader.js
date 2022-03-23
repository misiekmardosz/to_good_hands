import React from "react";
import {Link} from "react-router-dom";
import  homeHero from "../assets/Home-Hero-Image.jpg"
// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const HomeHeader = () => {
    return(
        <>
            <header className="header">
                {/*<img src={homeHero} className="main--photo"/>*/}
                <div className="main--photo"></div>
                <div className="nav--container">
                    <div className="login--panel">
                        <Link to="/logowanie">Zaloguj</Link>
                        <Link to="/rejestracja">Załóż Konto</Link>
                    </div>
                    <nav className="nav">
                        <a href="#" className="nav--link">Start</a>
                        <a href="#" className="nav--link">O co chodzi?</a>
                        <a href="#" className="nav--link">O nas</a>
                        <a href="#" className="nav--link">Fundacja i organizacje</a>
                        <a href="#" className="nav--link">Kontakt</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export {HomeHeader}