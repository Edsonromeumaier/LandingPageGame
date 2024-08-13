import { Navbar, NavbarBrand, NavLink, Modal, ModalBody, ModalHeader, Button, CardLink } from 'reactstrap';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../assets/images/Logo.svg';
import { HiPencilAlt } from "react-icons/hi";
import photoHero from '../../assets/images/hero-image.svg';
import heroimage from '../../assets/images/hero-image.svg';
import { BiStar } from 'react-icons/bi';
import { useState } from 'react';
import '../../Sessoes/sectionHero/SectionHero.css';

function SectionHero(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
  <div className='HeroBackground px-3'>
    <Navbar {...args} className='pt-3'>
      <NavbarBrand href=""><img src={Logo} alt='logo image'/></NavbarBrand>
      <div className='d-none d-sm-flex justify-content-between p-2 text-white gap-2'>
        <NavLink href="#">
          <h3 className='fs-6'>Sobre</h3>
        </NavLink>
        <NavLink href="#">
          <h3 className='fs-6'>Serviços</h3>
        </NavLink>
        <NavLink href="#">
          <h3 className='fs-6'>Nosso trabalho</h3>
        </NavLink>        
        <NavLink className='px-4 bg-info rounded-3'>
          <a
          className='hover:bg-primary/30 text-decoration-none'
          href="#"
          role="button">
            inscrevers-se Aqui!
          </a>
        </NavLink>          
      </div>
      <Button 
      className='d-sm-none' 
      color="" 
      onClick={toggleModal}
      >
        <RxHamburgerMenu color='' style={{'font-size':'2rem'}}  />
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
    <div className='px-3 px-sm-4 py-sm-5 text-white'>
        <h1 className='fw-bold lh-base' style={{fontweight:'800'}} >Aprenda a arte de 
        Desenvolvedor de jogos</h1>
        <p className='mt-4 fw-small fs-5'>
        Este é um curso abrangente sobre Desenvolvimento de Jogos. Você aprenderá tudo, desde gerar uma ideia até publicar seus jogos em diferentes plataformas.
        </p>        
        <Button className='rounded-5 text-white fw-bold px-4' style={{'background-color':'#da722c'}} color='#da722c'><HiPencilAlt className='mx-2'/>Inscrevase agora</Button>          
    </div>
    
    <div>
        <div className='container-sm d-grid d-md-none'>   
            <div className='row'>
                <div className='z-1 col d-grid align-items-center gap-2'>
                    <div className='row-6 badge bg-primary text-wrap'>
                        <p className='display-4'>30k.</p>
                        <p className='display-7'>Alunos Matriculados</p>
                    </div>
                    <div className='z-2 row-4 align-self-start badge bg-primary text-wrap'>
                        <p className='display-4'> 4.7</p>
                        <p className='display-7'>Classificação geral <BiStar/></p>
                    </div>
                </div>
                <div className='col-8'>
                    <img src={photoHero} className="img-fluid "  alt="imagem do herói" />
                </div>
            </div>
        </div>       
        <div className='container-md d-none d-md-block d-lg-none'>
            <div className='row'>
                <div className='col-6'>         
                    <div className='badge bg-primary text-wrap' style={{ width: '6rem' }}>
                        30k magic.
                    </div>
                    <div className='badge bg-primary text-wrap' style={{ width: '6rem' }}>
                        10k magic.
                    </div>
                </div>
                <div className='col-4'>
                    <img src={heroimage} className='rounded' alt="imagem do herói" />
                </div>
            </div>
        </div>
        <div className="container-lg d-none d-lg-block">            
            <div className="row">
                <div className="col-6">         
                    <div className="badge bg-primary text-wrap">
                        30k magic.
                    </div>
                    <div className="badge bg-primary text-wrap">
                        10k magic.
                    </div>
                </div>
                <div className="col-6 text-end">
                    <img src={heroimage} className="rounded"  alt="imagem do herói" />
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}

export default SectionHero
