import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export function ModalCambiarRol(props){
    const handleSave = () => {
        
    }
    return(
        <>
         <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Cambiar rol para el usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='mt-2'>Nombre del usuario</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John Doe" readOnly value={props.name}/>
                   
                    <Form.Label className='mt-2'>Usuario</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John2321" readOnly value={props.username}/>

                    <Form.Label className='mt-2'>Rol</Form.Label>
                    <Form.Select aria-label="Default select example"  value={props.rol}>
                    <option>Selecciona a un usuario</option>
                    <option value="administrador">Administrador</option>
                    <option value="cliente">Cliente</option>
                    <option value="moderador">Moderador</option>
                    </Form.Select>

                    
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleSave} >
                Editar
            </Button>
        </Modal.Footer>
    </Modal> 
        </>
    )
}