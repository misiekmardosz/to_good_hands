import logo from './logo.svg';
import "./scss/main.scss"
import './App.css';
import {Home} from "./components/Home/Home";
import {Form} from "./components/Form";
import {Login} from "./components/Login";
import {Logout} from "./components/Logout";
import {Register} from "./components/Register";
import {HashRouter, Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route exact path="/" element={<Home/>}>
                <Route exact path="/oddaj-rzeczy" element={<Form/>}/>
                <Route exact path="/logowanie" element={<Login/>}/>
                <Route path="/rejestracja" element={<Logout/>}/>
                <Route path="/wylogowano" element={<Register/>}/>
              </Route>
          </Routes>
      </HashRouter>
  );
}

export default App;
