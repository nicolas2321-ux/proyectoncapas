import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
import { register } from '../services/user/loginService';
import Swal from 'sweetalert2';
export function ModalRegister(props){
    const [nombreCompleto, setNombreCompleto] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    
    useEffect(() => {
        setNombreCompleto('')
        setUsername('')
        setPassword('')
        setEmail('')
    },[])

    const handleSave = async() => {
        if(nombreCompleto === '' || username === '' || password === '' || email === ''){
            Swal.fire(
                'Se detectaron campos vacios',
                'Error',
                'error'
                )
            }else{
        const object = {nombre: nombreCompleto, username: username, password: password, email:email}
        // props.save(object)
        const res = await register(object)
        const data = await res
        if(data.status === 200){
            Swal.fire( 
                'Usuario registrado!',
                'Exito',
                'success'
                ).then(()=>{
                    props.onHide()
                }
                )
        }else{
            Swal.fire(
                'No se pudo registrar el usuario',
                'Error',
                'error'
                ).then(()=>{
                    props.onHide()
                }
                )

        }
    }
    }
    return (       
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='mt-2'>Nombre completo</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John Doe"  onChange={(e) => setNombreCompleto(e.target.value)}  value={nombreCompleto} />
                    
                    <Form.Label className='mt-2'>Username</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John Doe"  onChange={(e) => setUsername(e.target.value)}  value={username} />
                    
                    <Form.Label className='mt-2'>Email</Form.Label>
                    <Form.Control type="email" name='text' placeholder="John2321"  onChange={(e) => setEmail(e.target.value)}  value={email}/>

                    <Form.Label className='mt-2'>Contraseña</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Ultrasecretpassword" value={password} onChange={(e) => setPassword(e.target.value)}  />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleSave} >
                Registrarme
            </Button>
        </Modal.Footer>
    </Modal>
    )
}