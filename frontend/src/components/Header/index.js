import React from "react";

import "./style.css";
import Button from "../Button"

import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    const Redirect = () => {
        history.push("/create");
    }

    return(
        <header className="header">
            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li><Button redirect={() => Redirect()}>Cadastro</Button></li>
            </ul>
        </header>
    )
}

export default Header;