import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";

import logo from "../../assets/logo.svg";

const Login = () => {
        return (
            <main className="d-flex flex-nowrap flex-column justify-content-center align-items-center" style={{ height: '100vh' }} bg="secondary">
            <div className="img mb-4">
                <Image src={logo} alt="Logo del restaurante" width={230} height={120} />
            </div>
            <div>
            <h3>Administración del restaurante</h3>
            <p>Espacio reservado para el personal</p>
            </div>
            <Form className='container col-md-4 form-home'>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Usuario" />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Ingresar
              </Button>
            </Form>
            </main>
          ); 
}

export default Login