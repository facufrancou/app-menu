import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import logo from "../assets/logoTL.svg";

const Home = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/categories");
  };

  /* Valindando cntenido de imputs  */
  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const errorMessage = validate(name, table);

  return (
    <main className="home" bg="secondary">
      <div className="img">
        <Image src={logo} alt="Logo del bar" width={250} height={200} />
      </div>

      <div className="container">
        <h1>Bienvenid@!</h1>
        <p>Para continuar, debes ingresar tu nombre y el número de mesa</p>

        <Form
          className="container col-md-3 form-home"
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <Form.Control
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Nombre"
          />
          <br />

          <Form.Control
            type="text"
            name="table"
            id="table"
            value={table}
            onChange={(ev) => setTable(ev.target.value)}
            placeholder="Número de mesa"
          />
          <br />
        </Form>
      </div>

      <div className="button">
        <p className="">{errorMessage}</p>
        <Button
          type="submit"
          /* variant="success" */
          disabled={errorMessage}
          onClick={nextPage}
        >
          Continuar
        </Button>
      </div>
    </main>
  );
};

const validate = (name, table) => {
  if (name === "") return "Tienes que ingresar un nombre para continuar";
  if (table === "" ?? table === isNaN) return "Tienes que ingresar un número de mesa para continuar";
};

export default Home;
