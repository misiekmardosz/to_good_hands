import React from "react";
import HeaderNav from "./Home/HeaderNav";
import {Link} from "react-router-dom";

const Logout = () => {
    return(
        <>
            <HeaderNav/>
            <section className={"login--container"}>
                <div>
                    <h2 className={"login--title"}>Wylogowano Pomyślnie</h2>
                    <div className={"login--buttons--container"}>
                        <button className={"login--buttons"}><Link to="/rejestracja" className="login--link">Załóż Konto</Link></button>
                        <button className={"login--buttons"}>Zaloguj się</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export {Logout}