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
import { useNavigate } from 'react-router-dom';
import { get_rol } from '../services/user/rol';
import {TbMoodSilence} from 'react-icons/tb'

export function NavBarComp() {
  const token = localStorage.getItem("token")
  const [islogged, setIslogged] = useState(false);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [showRegister, setShowRegister] = useState(false)
  const [credenciales, setCredenciales] = useState(null)
  const [rol, setRol] = useState('')
  const dispatch = useDispatch();
  const state = store.getState();
  const rolLocal = localStorage.getItem("rol")
  const username = localStorage.getItem("username")
  const [roles, setRoles] = useState([])
  const navigate = useNavigate();
  const [helper, setHelper] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  
  useEffect(() => {


    async function rol_fetch(){
    console.log('eeeeee')
    const object = {token: token}
    const roles = await get_rol(object)
    setIslogged(true)
    const result = await roles.json()

    setName(result.user.nombre)
    setRoles(result.roles)
   
    }
    if(token != null){
      
      rol_fetch()
    }

  }, [helper])


  async function handleLogin(credentials) {
    const response = await login(credentials)
    if(response.status === 200){
      const res = await response.json()
      localStorage.setItem("token", res.content)
      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Inicio de sesion exitoso',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }else{
      Swal.fire({
        title: 'Credenciales invalidas!',
        text: '',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    setHelper(true)
  }
  function handleRegister(register){
   
    setShowRegister(true)
    setCredenciales(register)
  }
  function saveRegister(object){
   const response = register(object)
   setIslogged(true)
   setName(response.nombreCompleto)
    setShowRegister(false)

  }
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
    setIslogged(false)
    setHelper(false)

  }
  const handleKeyPress = (event) =>{
    if (event.key === 'Enter') {
      event.preventDefault();
     
        dispatch({ type: 'CHANGE_BUSQUEDA', payload: {
            nombreEvento: busqueda,
           


        } });
       navigate('/busqueda')
    
    }
  }
  if(token != null){
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
            <Form style={{ marginLeft: '20%', marginTop: 'auto', marginBottom: 'auto' }}>
              <InputGroup className="">
                <InputGroup.Text id="basic-addon1">
                  <BiSearch />
                </InputGroup.Text>
                <Form.Control onChange={(e) => {setBusqueda(e.target.value)}}
                 onKeyPress={(e) => {handleKeyPress(e)}}
               
                  placeholder="Buscar"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            <div style={{ borderLeft: '1px solid white', height: '40px', marginLeft: '10px' }}></div>
          

              
           
            <Nav className="">
              {/* AQUI VAN LAS PESTAÑAS QUE NECESITEN PERMISOS */}
            {roles.map((rol, index) => (
               <>
            {rol.rol === "administrador" ? (
              <Nav.Link href="/events" className="ms-2 text-white">
                <BsFillTicketFill /> Administrar eventos
              </Nav.Link>
            ):(<></>)}
               {rol.rol === "administrador" ? (
              <Nav.Link href="/userAdmin" className="ms-2 text-white">
                <FaUserAlt /> Administrar usuarios
              </Nav.Link>
             ):(<></>)}

            {rol.rol === "moderador" ? (
              <Nav.Link href="/moderarUsuarios" className="ms-2 text-white">
                <TbMoodSilence /> Moderar usuarios
              </Nav.Link>
             ):(<></>)}
              
             
               
             </>
             ))}

              <Nav.Link href="/myevents" className="ms-2 text-white">
              <BsFillTicketFill /> Mis eventos
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
                      <p>{name}</p>

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
  }
}

export default NavBarComp;
