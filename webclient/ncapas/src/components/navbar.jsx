import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { BiSearch, BiUser } from 'react-icons/bi';
import { BsFillTicketFill } from 'react-icons/bs';
import { AiFillFilter } from 'react-icons/ai';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt from 'jwt-decode';
import { login, register } from '../services/user/loginService';
import { useState } from 'react';
import { ModalRegister } from './modalRegister';
import store from '../store';
import { useDispatch } from 'react-redux';
import {FaUserAlt} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import Swal from 'sweetalert2'
import {BsGraphUpArrow} from 'react-icons/bs'

export function NavBarComp() {
  const [islogged, setIslogged] = useState(false);
  const [name, setName] = useState('no actualiza');
  const [lastname, setLastname] = useState('');
  const [showRegister, setShowRegister] = useState(false)
  const [credenciales, setCredenciales] = useState(null)
  const [rol, setRol] = useState('')
  const dispatch = useDispatch();
  const state = store.getState();
  const rolLocal = localStorage.getItem("rol")
  const username = localStorage.getItem("username")
  
  useEffect(() => {
    if(username !== null){
      setIslogged(true)
    }
  }, [])

  function handleLogin(credentials) {
    
    const response = login(credentials);
    setIslogged(true);
    setLastname(response.family_name);
    setName(response.given_name);
    localStorage.setItem("rol", response.rol)
    localStorage.setItem("username", response.family_name+" "+response.given_name)
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Inicio de sesion exitoso',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
  function handleRegister(register){
    console.log(state)
    setShowRegister(true)
    setCredenciales(register)
  }
  function saveRegister(object){
   const response = register(object)
   setIslogged(true)
   setName(response.nombreCompleto)
    setShowRegister(false)

  }
  function logout(){
    localStorage.setItem("rol", null)
    localStorage.setItem("username", null)
    setIslogged(false)
  }
  if (rolLocal == 'admin') {
    return (
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <ModalRegister
        show={showRegister}
        onHide={()=>setShowRegister(false)}
        save={saveRegister}
        data={credenciales}
        />
        <Container>
          <Navbar.Brand href="/">ICONO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form style={{ marginLeft: '40%', marginTop: 'auto', marginBottom: 'auto' }}>
              <InputGroup className="">
                <InputGroup.Text id="basic-addon1">
                  <BiSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Buscar"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            <div style={{ borderLeft: '1px solid white', height: '40px', marginLeft: '10px' }}></div>
            <Nav className="">
              <Nav.Link href="/events" className="ms-2 text-white">
                <BsFillTicketFill /> Administrar eventos
              </Nav.Link>
              <Nav.Link href="/userAdmin" className="ms-2 text-white">
                <FaUserAlt /> Administrar usuarios
              </Nav.Link>

              <Nav.Link href="#link" className="ms-2 text-white">
                <AiFillFilter /> Filtrar
              </Nav.Link>
              <NavDropdown title="Usuario" id="basic-nav-dropdown" drop={'start'}>
                  {islogged === false ? (
                    <>
                <NavDropdown.Item href="#action/3.1">
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          handleLogin(jwt(credentialResponse.credential));
                        }}
                        type={'icon'}
                        text={'login_with'}
                        useOneTap={false}
                        auto_select={false}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                      <p>Iniciar sesión</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          handleRegister(jwt(credentialResponse.credential));
                        }}
                        type={'icon'}
                        text={'signup_with'}
                        useOneTap={false}
                        auto_select={false}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                      <p>Registrarse</p>
                      </NavDropdown.Item>
                    </>
                  ) : (
                    <>
                     <NavDropdown.Item>
                      <BiUser />
                      <p>{username}</p>

                     </NavDropdown.Item>

                     <NavDropdown.Item onClick={logout}>
                      <BiLogOut />
                      <p>Log Out</p>
                     </NavDropdown.Item>
                    
                    </>
                  )}
              
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }else if(rolLocal === 'cliente'){
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <ModalRegister
      show={showRegister}
      onHide={()=>setShowRegister(false)}
      save={saveRegister}
      data={credenciales}
      />
      <Container>
        <Navbar.Brand href="/">ICONO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form style={{ marginLeft: '40%', marginTop: 'auto', marginBottom: 'auto' }}>
            <InputGroup className="">
              <InputGroup.Text id="basic-addon1">
                <BiSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <div style={{ borderLeft: '1px solid white', height: '40px', marginLeft: '10px' }}></div>
          <Nav className="">
            <Nav.Link href="/myevents" className="ms-2 text-white">
              <BsFillTicketFill /> Mis eventos
            </Nav.Link>
            <Nav.Link href="#link" className="ms-2 text-white">
              <AiFillFilter /> Filtrar
            </Nav.Link>
            <NavDropdown title="Usuario" id="basic-nav-dropdown" drop={'start'}>
                {islogged === false ? (
                  <>
                <NavDropdown.Item href="#action/3.1">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        handleLogin(jwt(credentialResponse.credential));
                      }}
                      type={'icon'}
                      text={'login_with'}
                      useOneTap={false}
                      auto_select={false}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                    <p>Iniciar sesión</p>
                   </NavDropdown.Item>

                   <NavDropdown.Item href="#action/3.1">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        handleRegister(jwt(credentialResponse.credential));
                      }}
                      type={'icon'}
                      text={'signup_with'}
                      useOneTap={false}
                      auto_select={false}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                    <p>Registrarse</p>
                     </NavDropdown.Item>
                  </>
                ) : (
                  <>
                  <NavDropdown.Item>
                   <BiUser />
                   <p>{username}</p>

                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logout}>
                   <BiLogOut />
                   <p>Log Out</p>
                  </NavDropdown.Item>
                 
                 </>
                )}
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    }else{
      return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <ModalRegister
          show={showRegister}
          onHide={()=>setShowRegister(false)}
          save={saveRegister}
          data={credenciales}
          />
          <Container>
            <Navbar.Brand href="#home">ICONO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form style={{ marginLeft: '40%', marginTop: 'auto', marginBottom: 'auto' }}>
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1">
                    <BiSearch />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Buscar"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form>
              <div style={{ borderLeft: '1px solid white', height: '40px', marginLeft: '10px' }}></div>
              <Nav className="">
                <Nav.Link href="#home" className="ms-2 text-white">
                  <BsFillTicketFill /> Eventos
                </Nav.Link>
                <Nav.Link href="#link" className="ms-2 text-white">
                  <AiFillFilter /> Filtrar
                </Nav.Link>
                <NavDropdown title="Usuario" id="basic-nav-dropdown" drop={'start'}>
                  <NavDropdown.Item href="#action/3.1">
                    {islogged === false ? (
                      <>
                        <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            handleLogin(jwt(credentialResponse.credential));
                          }}
                          type={'icon'}
                          text={'login_with'}
                          useOneTap={false}
                          auto_select={false}
                          onError={() => {
                            console.log('Login Failed');
                          }}
                        />
                        <p>Iniciar sesión</p>
    
                        <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            handleRegister(jwt(credentialResponse.credential));
                          }}
                          type={'icon'}
                          text={'signup_with'}
                          useOneTap={false}
                          auto_select={false}
                          onError={() => {
                            console.log('Login Failed');
                          }}
                        />
                        <p>Registrarse</p>
                      </>
                    ) : (
                      <>
                        <BiUser />
                        <p>{name} {lastname}</p>
                      </>
                    )}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
}

export default NavBarComp;
