import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import facebook from "../../assets/Facebook.svg"
import instagram from "../../assets/Instagram.svg"

const HomeForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    // const ValidMail = () => {
    //   if(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    //       return <></>
    //     else if (email !== "")
    //         return <h4 className={"mail--valid"}>podany email jest nieprawidłowy</h4>
    //     else
    //         return <></>
    // }
    // const handleFormSubmit = () => {
    //   return
    // }
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                body: JSON.stringify({
                    location: email,
                    msg: message,
                    param: name
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
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
            <form className={"form"} onSubmit={handleSubmit}>
                <div className={"inputs"}>
                    <div className={"input"}>
                        <h3>wpisz swoje imie</h3>
                        {/*<input className={"form--input"} placeholder={"Krzysztof"}/>*/}
                        <input type="text" className={"form--input"} placeholder='Krzysztof'onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className={"input"}>
                        <h3>wpisz swoj email</h3>
                        {/*<input className={"form--input"} placeholder={"abc@xyz.com"}/>*/}
                        <input type="text" className={"form--input"} placeholder='abc@xyz.com'onChange={e => setEmail(e.target.value)}/>
                        {/*<ValidMail/>*/}
                    </div>
                </div>
                <div className={"textarea"}>
                    <h3>Wpisz swoja wiadomość</h3>
                    <textarea onChange={e => setMessage(e.target.value)} placeholder={"Lorem ipsum dolor sit amet," +
                        " consectetur adipiscing elit," +
                        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                        "ex ea commodo consequat."}/>
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