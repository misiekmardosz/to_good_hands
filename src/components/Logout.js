import React from "react";
import HeaderNav from "./Home/HeaderNav";
import {Link} from "react-router-dom";

const Logout = () => {
    return(
        <>
            <HeaderNav/>
            <section className={"logout--container"}>
                <div>
                    <h2 className={"logout--title"}>Wylogowano nastąpiło<br/>pomyślnie!</h2>
                    <div className={"logout--buttons--container"}>
                        <button className={"logout--buttons logout--button"}><Link to="/" className="logout--link">Strona główna</Link></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export {Logout}