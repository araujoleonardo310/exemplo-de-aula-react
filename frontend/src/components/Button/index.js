import React from "react";
import "./style.css";

const Button = ({children, redirect}) => {
    return (
        <button onClick={redirect}>{children}</button>
    );
}

export default Button;