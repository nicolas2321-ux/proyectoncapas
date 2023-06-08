export function ModalAgregarColaboradores(){
    function handleSave(){
        
    }
    return(
        <>
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
        </>
    )
}