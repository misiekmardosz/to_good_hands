import React from "react";
import HeaderNav from "./Home/HeaderNav";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import {User} from "../model/user";
const API_URL = 'http://localhost:3000';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetePassword, setRepetePassword] = useState('')
    console.log(users);


    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/users`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    const addNewUser = () => {
        const user = new User(userEmail, password);
        fetch(`${API_URL}/users`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((newUser) => {
                user.setId(newUser.id)
                setUsers((prevState) => [...prevState, user]);
            });
    };
    const addUser = () =>{
        if(password === repetePassword && userEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        addNewUser()
        else return <h4 className={"input--valid"}>wiadomość musi mieć conajmniej 120 znaków!</h4>
    }

    return(
        <>
            <HeaderNav/>
            <section className={"register--container"}>
                <div>
                    <h2 className={"register--title"}>Załóż konto</h2>
                    <form className={"register--form"}>
                        <div className={"register--form--container"}>
                            <h3 className={"register--form--container--title"}>Email</h3>
                            <input className={"register--form--container--input"} onChange={e => setUserEmail(e.target.value)}/>
                        </div>
                        <div className={"register--form--container"}>
                            <h3 className={"register--form--container--title"}>Hasło</h3>
                            <input className={"register--form--container--input"} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className={"register--form--container"}>
                            <h3 className={"register--form--container--title"}>Powtórz hasło</h3>
                            <input className={"register--form--container--input"} onChange={e => setRepetePassword(e.target.value)}/>
                        </div>
                    </form>
                    <div className={"register--buttons--container"}>
                        <button className={"register--buttons"}>Zaloguj się</button>
                        <button className={"register--buttons"} onClick={addUser}>Załóż Konto</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export {Register}