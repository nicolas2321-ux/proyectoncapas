import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import './../stylesheets/presentation.css'
export function ModalAgregarColaboradores(props){
    function handleSave(){

    }
    return(
        <>
         <Modal show={props.show} onHide={props.onHide} className="custom-modal"  style={{padding:"50px"}}>
         <Form.Label className='m-2'>Agregar usuario al evento</Form.Label>
        <Form.Control className='my-3' type="text" name='text' placeholder="John Doe"  />
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nicolas Orellana</td>
          <td>orellanaj2321@gmail.com</td>
          <td><Button>Eliminar del evento</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Nicolasio el malasio</td>
          <td>orellanitas</td>
          <td><Button>Eliminar del evento</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>Larrylacola</td>
          <td><Button>Eliminar del evento</Button></td>
        </tr>
      </tbody>
    </Table>
    </Modal>
        </>
    )
}