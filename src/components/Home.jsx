import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import logo from "../assets/logo.svg";

const Home = () => {
  const navigate = useNavigate();
  const nextPage = () => {

    let client = {
      nombre: name,
      mesa: table
    }

    localStorage.setItem('cliente', JSON.stringify( client ));
    navigate("/categories");
  };

  /* Valindando cntenido de imputs  */
  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const errorMessage = validate(name, table);

  const dashPage = () => {
    navigate("/Login"); 
  }

  return (
    <>
    
    <main className="d-flex flex-nowrap flex-column justify-content-center align-items-center" style={{ height: '100vh' }} bg="secondary">
      <div className="img mb-4">
        <Image src={logo} alt="Logo del restaurante" width={230} height={120} />
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
          variant='warning'
          className='fw-bold rounded-pill py-3'
          style={{ width: '160px' }}
          /* variant="success" */
          disabled={errorMessage}
          onClick={nextPage}
        >
          Continuar
        </Button>
      </div>
      <br />
      <br />
      <Button
          type="submit"
          variant='dark'
          className='fw-bold rounded-pill py-3'
          style={{ width: '160px' }}
          onClick={dashPage}
        >
          Acceso Admin
        </Button>
    </main>
    
    
    </>
  );
};

const validate = (name, table) => {
  if (name === "") return "Tienes que ingresar un nombre para continuar";
  if (table === "" ?? table === isNaN) return "Tienes que ingresar un número de mesa para continuar";
};

export default Home;
