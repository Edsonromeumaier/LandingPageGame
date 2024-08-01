import { Navbar, NavbarBrand, NavLink, Modal, ModalBody, ModalHeader, Button, CardLink } from 'reactstrap';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../assets/images/Logo.svg';
import { HiPencilAlt } from "react-icons/hi";
import photoHero from '../../assets/images/hero-image.svg';
import heroimage from '../../assets/images/hero-image.svg';
import { useState } from 'react';
import '../../Sessoes/sectionHero/SectionHero.css';

function SectionHero(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
  <div className='HeroBackground'>
    <Navbar {...args} className='p-6'>
      <NavbarBrand href=""><img src={Logo} alt='logo image'/></NavbarBrand>
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
    <div className="px-3 px-sm-4 py-3 py-sm-5">
        <h1 className="display-4">Aprenda a arte de 
        Desenvolvedor de jogos</h1>
        <p className="lead">
        Este é um curso abrangente sobre Desenvolvimento de Jogos. Você aprenderá tudo, desde gerar uma ideia até publicar seus jogos em diferentes plataformas.
        </p>        
        <Button color="secondary"><HiPencilAlt className='mt-0' />Enrol Now</Button>          
    </div>
    <div>
        <div className="container-sm d-grid d-md-none">   
            <div className="row">
                <div className="z-1 d-grid col align-items-center">
                    <div className="row-6 align-self-center badge bg-primary text-wrap " >
                        30k magic.
                    </div>
                    <div className="col-4 align-self-start badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        10k magic.
                    </div>
                </div>
                <div className="z-0 col-6 text-end">
                    <img src={photoHero} className="img-fluid"  alt="imagem do herói" />
                </div>
            </div>
        </div>       
        <div className="container-md d-none d-md-block d-lg-none">            
            <div className="row">
                <div className="col-6">         
                    <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        30k magic.
                    </div>
                    <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        10k magic.
                    </div>
                </div>
                <div className="col-6 text-end">
                    <img src={heroimage} className="rounded" style={{ width: '60%' }} alt="imagem do herói" />
                </div>
            </div>
        </div>
        <div className="container-lg d-none d-lg-block">            
            <div className="row">
                <div className="col-6">         
                    <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        30k magic.
                    </div>
                    <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>
                        10k magic.
                    </div>
                </div>
                <div className="col-6 text-end">
                    <img src={heroimage} className="rounded" style={{ width: '60%' }} alt="imagem do herói" />
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}

export default SectionHero
