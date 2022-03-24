import React from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import HeaderNav from "./HeaderNav";


const HomeHeader = () => {
    return(
        <>
            <header className="header" title={"section1"}>
                {/*<img src={homeHero} className="main--photo"/>*/}
                <div className="main--photo"></div>
                <div className="header--container">
                    <HeaderNav/>
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