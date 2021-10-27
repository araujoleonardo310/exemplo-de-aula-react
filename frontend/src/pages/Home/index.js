import React, {useState, useEffect} from "react";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Main from "../../components/Main";

import "./style.css";
import HomeServices from "./services";

const Home = () => {
    const [users, setUsers] = useState([])

    const listar = async () => {
        const {data} = await HomeServices.listar();
        setUsers(data)
    }
    
    const Excluir = async (id) => {
        await HomeServices.deletar(id);
        listar();
    }

    useEffect(() => {
        listar();
    }, [])

  return(
    <section className="section-home">
      <Header /> 
      <Main />

      <ul className="container-ul">
          {users.map((item) => (
              <li>
                  <span>{item.name}</span>
                  <span>{item.number}</span>
                  <Button redirect={() => Excluir(item.id)}>Excluir</Button>
              </li>
          ))}
      </ul>
    </section>
  )
}

export default Home;