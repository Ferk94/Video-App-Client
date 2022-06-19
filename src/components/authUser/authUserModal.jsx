import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Spinner } from 'reactstrap';
import './authUserModal.css';

const AuthUserModal = () => {

    const [modalState, setModalState] = useState(true)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();


    useEffect(()=>{
        setTimeout(() => {  
            setLoading(false)
         }, 5000);
      }, [])

      function closeModal(e){
        e.preventDefault();
        setModalState(!modalState)
        navigate('/')
    }

  return (
    <div className='loading-container'>
        {
        loading === true ? 
        <div className="spinnerModal">
        <Spinner style={{marginLeft: '50%', color: "white", marginTop:"20%", width:"100px", height: "100px"}} /> </div> :
        <Modal
            backdrop={false}
            size={"s"}
            centered
            scrollable
            isOpen={modalState}
            
        >

            <ModalHeader>
                 No ha podido iniciar sesión satisfactioriamente
            </ModalHeader>
           
            <ModalBody>
               E-mail o contraseña incorrectas.
               
            </ModalBody>
            
            <ModalFooter>
                <Button onClick={(e) => closeModal(e)}>
                    Aceptar
                </Button>
            </ModalFooter>
        </Modal>
        }
    </div>
  )
}

export default AuthUserModal;