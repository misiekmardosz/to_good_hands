import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import facebook from "../../assets/Facebook.svg"
import instagram from "../../assets/Instagram.svg"
import {ValidName, ValidMail, ValidMessage, ValidationGood} from "./Validation";
const HomeForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [focusedMail, setFocusedMail] = useState(false)
    const [focusedName, setFocusedName] = useState(false)
    const [focusedMessage, setFocusedMessage] = useState(false)
    const [goodValidation, setGoodValidation] = useState('')
    const onFocusName = () => setFocusedName(true)
    const onBlurName = () => setFocusedName(false)
    const onFocusMail = () => setFocusedMail(true)
    const onBlurMail = () => setFocusedMail(false)
    const onFocusMessage = () => setFocusedMessage(true)
    const onBlurMessage = () => setFocusedMessage(false)


    // console.log(focused);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setMessage("");
                setGoodValidation("wiadomość została wysłana, wkrótce się z tobą skontaktujemy")

            }
            else {

            }
        } catch (err) {
            console.log(err);
        }
    };



    return(
      <footer className="footer--form" title="section6" id="section6">
        <div className="form--container">
            <div className="form--photo"></div>
            <div className={"form--box"}>
            <h2 className={"form--title"}>Skontaktuj się z nami</h2>
                <ValidationGood goodValidation={goodValidation}/>
            <form className={"form"} onSubmit={handleSubmit}>
                <div className={"inputs"}>
                    <div className={"input"}>
                        <h3>wpisz swoje imie</h3>
                        {/*<input className={"form--input"} placeholder={"Krzysztof"}/>*/}
                        <input type="text" value={name} onBlur={onBlurName} onFocus={onFocusName} className={"form--input"} placeholder='Krzysztof'onChange={e => setName(e.target.value)}/>
                        <ValidName name={name} focusedName={focusedName}/>
                    </div>
                    <div className={"input"}>
                        <h3>wpisz swoj email</h3>
                        {/*<input className={"form--input"} placeholder={"abc@xyz.com"}/>*/}
                        <input type="text" value={email} onBlur={onBlurMail} onFocus={onFocusMail} className={"form--input"} placeholder='abc@xyz.com'onChange={e => setEmail(e.target.value)}/>
                        <ValidMail email={email} focusedMail={focusedMail}/>
                    </div>
                </div>
                <div className={"textarea"}>
                    <h3>Wpisz swoja wiadomość</h3>
                    <textarea onChange={e => setMessage(e.target.value)} onFocus={onFocusMessage} onBlur={onBlurMessage} value={message} placeholder={"Lorem ipsum dolor sit amet," +
                        " consectetur adipiscing elit," +
                        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                        "ex ea commodo consequat."}/>
                    <ValidMessage message={message} focusedMessage={focusedMessage}/>
                </div>
              <button className={"send--button"} onClick={"submit"}>Wyślij</button>
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