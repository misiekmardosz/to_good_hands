import React from "react";
import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';
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
                            <Link to="/logowanie" >Zaloguj</Link>
                            <Link to="/rejestracja">Załóż Konto</Link>
                        </div>
                        <nav className="nav">
                            <Link to={"#"}>Start</Link>
                            <Link to={"#"}>O co chodzi?</Link>
                            <Link to={"#"}>O nas</Link>
                            <Link to={"#"}>Fundacja i organizacje</Link>
                            <Link to={"#"}>Kontakt</Link>
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