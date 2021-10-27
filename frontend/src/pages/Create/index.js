import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import CreateServices from "./services";

const Create = () => {
    const history = useHistory()

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const Inserir = async () => {
        const payload = {
            name: name,
            number: number
        }

        await CreateServices.criar(payload);
        history.push("/");
    }

    return(
        <section>
            <input type="text" placeholder="Nome" onChange={(event) => setName(event.target.value)}/>
            <input type="text" placeholder="Telefone" onChange={(event) => setNumber(event.target.value)}/>
            <Button redirect={() => Inserir()}>Cadastrar</Button>
        </section>
    )
}

export default Create;