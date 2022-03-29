import React from "react";
import HeaderNav from "./Home/HeaderNav";
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <>
            <HeaderNav/>
            <section className={"register--container"}>
                <div>
                    <h2 className={"register--title"}>Załóż konto</h2>
                    <form className={"register--form"}>
                        <div className={"register--form--container"}>
                            <h3 className={"register--form--container--title"}>Email</h3>
                            <input className={"register--form--container--input"}/>
                        </div>
                        <div className={"register--form--container"}>
                            <h3 className={"register--form--container--title"}>Hasło</h3>
                            <input className={"register--form--container--input"}/>
                        </div>
                        <div className={"register--form--container"}>
                            <h3 className={"register--form--container--title"}>Powtórz hasło</h3>
                            <input className={"register--form--container--input"}/>
                        </div>
                    </form>
                    <div className={"register--buttons--container"}>
                        <button className={"register--buttons"}>Zaloguj się</button>
                        <button className={"register--buttons"}><Link to="/rejestracja" className="register--link">Załóż Konto</Link></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export {Register}