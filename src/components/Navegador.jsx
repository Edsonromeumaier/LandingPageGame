import React, { useState } from 'react';
import { Navbar, NavItem, Nav, NavbarBrand, NavLink, Modal, ModalBody, ModalHeader, Button, CardLink } from 'reactstrap';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../src/assets/images/Logo.svg';

function Navegador(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args} className='p-6'>
      <NavbarBrand href=""><img src={Logo} alt='logo image' /></NavbarBrand>
      <div className="d-none d-sm-flex p-2 ">
        <NavLink href="#">
          <h3>Sobre</h3>
        </NavLink>
        <NavLink href="#">
          <h3>Serviços</h3>
        </NavLink>
        <NavLink href="#">
          <h3>Nosso trabalho</h3>
        </NavLink>
      </div>
      <Button className='d-sm-none' color="primary" onClick={toggleModal}>
        <RxHamburgerMenu color='secondary' />
      </Button>
      <Modal isOpen={isOpen} toggle={toggleModal} className='grid text-center' fullscreen>
        <ModalHeader toggle={toggleModal} className='container-fluid text-end bg-dark'></ModalHeader>
        <ModalBody className='container-fluid text-center bg-warning text-white d-flex align-items-center justify-content-center'>
          <CardLink className='d-flex flex-column align-items-center'>
            <NavLink href="#">
              <h2>Sobre</h2>
            </NavLink>
            <NavLink href="#">
              <h2>Serviços</h2>
            </NavLink>
            <NavLink href="#">
              <h2>Nosso trabalho</h2>
            </NavLink>
            <Button color="secondary" className='mt-3'>Estática</Button>
          </CardLink>
        </ModalBody>
      </Modal>
    </Navbar>
  );
}

export default Navegador;
