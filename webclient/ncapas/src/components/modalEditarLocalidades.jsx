import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export function EditarLocalidades(props){

    function handleSave(){

    }
    return(
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Editar localidades</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className='mt-2'>Platinum</Form.Label>
                    <Form.Control type="text" name='text' placeholder="John Doe" value={props.platinum}/>
                   
                    <Form.Label className='mt-2'>VIP</Form.Label>
                    <Form.Control value={props.vip} type="text" name='text' placeholder="John Doe"/>

                    <Form.Label className='mt-2'>Gold</Form.Label>
                    <Form.Control value={props.gold} type="text" name='text' placeholder="John Doe"/>

                    <Form.Label className='mt-2'>General</Form.Label>
                    <Form.Control value={props.general} type="text" name='text' placeholder="John Doe"/>
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
    )
}