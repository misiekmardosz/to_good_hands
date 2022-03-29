import React from "react";
import HeaderNav from "./Home/HeaderNav";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
            <HeaderNav/>
        <section className={"login--container"}>
            <div>
                <h2 className={"login--title"}>Zaloguj się</h2>
                <form className={"login--form"}>
                    <div className={"login--form--container"}>
                        <h3 className={"login--form--container--title"}>Email</h3>
                        <input className={"login--form--container--input"}/>
                    </div>
                    <div className={"login--form--container"}>
                        <h3 className={"login--form--container--title"}>Hasło</h3>
                        <input className={"login--form--container--input"}/>
                    </div>
                </form>
                <div className={"login--buttons--container"}>
                    <button className={"login--buttons"}><Link to="/rejestracja" className="login--link">Załóż Konto</Link></button>
                    <button className={"login--buttons"}>Zaloguj się</button>
                </div>
            </div>
        </section>
    </>
    )
}

export default Login