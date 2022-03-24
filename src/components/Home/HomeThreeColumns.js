import React from "react";
import {Link} from "react-router-dom";
const HomeThreeColumns = () => {
    return(
        <>
            <section className={"three--columns"} title="section2" id="section2">
                <article className={"column"}>
                    <h2 className={"column--number"}>10</h2>
                    <h3 className={"column--title"}>ODDANYCH WORKÓW</h3>
                    <p className={"column--paragraph"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </article>
                <article className={"column"}>
                    <h2 className={"column--number"}>5</h2>
                    <h3 className={"column--title"}>WSPARTYCH ORGANIZACJI</h3>
                    <p className={"column--paragraph"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </article>
                <article className={"column"}>
                    <h2 className={"column--number"}>7</h2>
                    <h3 className={"column--title"}>ZORGANIZOWANY ZBIÓREK</h3>
                    <p className={"column--paragraph"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </article>
            </section>
        </>
    )
}

export {HomeThreeColumns}