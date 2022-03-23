import React from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const HomeHeader = () => {
    return(
        <>
            <header className="header">
                {/*<img src={homeHero} className="main--photo"/>*/}
                <div className="main--photo"></div>
                <div className="header--container">
                    <div className={"header--nav"}>
                        <div className="login--panel">
                            <Link to="/logowanie" className="login--link">Zaloguj</Link>
                            <Link to="/rejestracja" className="login--link">Załóż Konto</Link>
                        </div>
                        <nav className="nav">
                            <Scroll to={"#"}>Start</Scroll>
                            <Scroll to={"#"}>O co chodzi?</Scroll>
                            <Scroll to={"#"}>O nas</Scroll>
                            <Scroll to={"#"}>Fundacja i organizacje</Scroll>
                            <Scroll to={"#"}>Kontakt</Scroll>
                        </nav>
                    </div>
                    <div className={"header--main"}>
                        <h1 className="title">Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <div className={"buttons"}>
                            <button className="main--button">ODDAJ<br/>RZECZY</button>
                            <button className="main--button">ZORGANIZUJ<br/>ZBIÓRKĘ</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export {HomeHeader}