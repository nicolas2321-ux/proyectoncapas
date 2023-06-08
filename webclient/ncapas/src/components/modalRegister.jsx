import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
export function ModalRegister(props){
    const [nombreCompleto, setNombreCompleto] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    
    useEffect(() => {
       
       if(props.data !== null){
        setNombreCompleto(props.data.name)
        setUsername(props.data.email)
        setEmail(props.data.email)
       }
    }, [props.data])
    const handleSave = () => {
        const object = {nombreCompleto: nombreCompleto, username: username, password: password, email:email}
        props.save(object)
        
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
                    <Form.Control type="text" name='text' placeholder="John2321" onChange={(e) => setUsername(e.target.value)} value={username} />

                    <Form.Label className='mt-2'>Contraseña</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Ultrasecretpassword" onChange={(e) => setPassword(e.target.value)}  />
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