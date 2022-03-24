import React from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";

const HomeForm = () => {
  return(
      <footer className="footer--form">
        <div className="form--container">
            <div className="form--photo"></div>
            <div className={"form--box"}>
            <h2 className={"form--title"}>Skontaktuj się z nami</h2>
            <form className={"form--form"}>
              <input className={"form--input"} placeholder={"Krzysztof"}/>
              <input className={"form--input"} placeholder={"abc@xyz.com"}/>
              <textarea>Wpisz swoja wiadomość</textarea>
              <button>Wyślij</button>
            </form>
          </div>
        </div>
          <div className={'footer'}></div>
      </footer>

  )
}

export default HomeForm