import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';

export function CrearEvento(props){
    const handleSave = () => {

    }
    return (
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Crear evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='mt-2'>Titulo del evento</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John Doe"  />
                   
                    <Form.Label className='mt-2'>Artista</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John2321"  />

                    <Form.Label className='mt-2'>Fecha</Form.Label>
                    <Form.Control type="date" name='password' placeholder="Ultrasecretpassword" />

                    <Form.Label className='mt-2'>Localidad</Form.Label>
                    <Form.Control type="text" name='password' placeholder="La Libertad" />

                    <Form.Label className='mt-2'>Boletos disponibles</Form.Label>
                    <Form.Control type="number" name='password' placeholder="0" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleSave} >
                Crear evento
            </Button>
        </Modal.Footer>
    </Modal>
    )
}