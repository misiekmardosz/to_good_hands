import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import facebook from "../../assets/Facebook.svg"
import instagram from "../../assets/Instagram.svg"

const HomeForm = () => {
    const [email, setEmail] = useState('')
    const handleEmail = () => {
        setEmail(handleEmail)
    }



  return(
      <footer className="footer--form" title="section6" id="section6">
        <div className="form--container">
            <div className="form--photo"></div>
            <div className={"form--box"}>
            <h2 className={"form--title"}>Skontaktuj się z nami</h2>
            <form className={"form"}>
                <div className={"inputs"}>
                    <div className={"input"}>
                        <h3>wpisz swoje imie</h3>
                        <input className={"form--input"} placeholder={"Krzysztof"}/>
                        <input type="text" className={"form--input"} placeholder='0'onChange={e => handleEmail(e.target.value)}/>
                    </div>
                    <div className={"input"}>
                        <h3>wpisz swoj email</h3>
                        <input className={"form--input"} placeholder={"abc@xyz.com"}/>
                    </div>
                </div>
                <div className={"textarea"}>
                    <h3>Wpisz swoja wiadomość</h3>
                    <textarea placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                </div>
              <button className={"send--button"}>Wyślij</button>
            </form>
          </div>
            <a href="#"><img src={instagram}/></a>
            <a href="#"><img src={facebook}/></a>
        </div>
          <div className={'footer'}>
              <h5>Copyright by Coders Lab</h5>

          </div>
      </footer>

  )
}

export default HomeForm