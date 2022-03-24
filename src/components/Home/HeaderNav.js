import React from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
const HeaderNav = () => {
  return(
      <div className={"header--nav"}>
          <div className="login--panel">
              <Link to="/logowanie" className="login--link">Zaloguj</Link>
              <Link to="/rejestracja" className="login--link">Załóż Konto</Link>
          </div>
          <nav className="nav">
              <Scroll to={"section1"} className="nav--link"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Start</Scroll>
              <Scroll to={"section2"} className="nav--link"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>O co chodzi?</Scroll>
              <Scroll to={"section3"} className="nav--link"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>O nas</Scroll>
              <Scroll to={"section4"} className="nav--link"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Fundacja i organizacje</Scroll>
              <Scroll to={"section5"} className="nav--link"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Kontakt</Scroll>
          </nav>
      </div>
  )
}

export default HeaderNav