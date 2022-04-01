import logo from './logo.svg';
import "./scss/main.scss"
import './App.css';
import {Home} from "./components/Home/Home";
import {Form} from "./components/Form";
import  Login from "./components/Login";
import {Logout} from "./components/Logout";
import {Register} from "./components/Register";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom";
const API_URL = 'http://localhost:3000';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/oddaj-rzeczy" element={<Form/>}/>
              <Route path="/logowanie" element={<Login/>}/>
              <Route path="/rejestracja" element={<Register/>}/>
              <Route path="/wylogowano" element={<Logout/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
