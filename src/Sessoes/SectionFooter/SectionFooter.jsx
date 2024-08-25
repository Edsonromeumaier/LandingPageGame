
import Insta from  '../../assets/images/instagram.svg'
import Face from '../../assets/images/facebook.svg'
import Vector from '../../assets/images/Vector.svg'
import Group from '../../assets/images/Group.svg'

function Footerr () {
    return(
<footer className="page-footer blue pt-4">
  <div className="container text-center">
    <div className="row card-body gap-4 m-4 gap-md-0">
    <h5 className="mt-4 fs-2 fw-bold lh-lg">Baixe nosso App</h5>
    <p className="fw-bolder lh-lg">Você pode usar nosso aplicativo para uma melhor experiência em smartphones</p>    
    </div>
    
    <div className="d-flex justify-content-center row gap-4 m-4 gap-md-0">
    <div className="col-sm-6">
        <div className="card">
        <div className=" d-flex justify-content-center align-items-center gap-3 card-body  bg-dark rounded">
        <img src={Vector}/>
        <h3 className="text-white">App Store</h3>
        </div>
        </div>
    </div>
    <div className="col-sm-6 ">
    <div className="card bg-dark rounded">
      <div className="card-body d-flex justify-content-center align-items-center gap-3">
      <img src={Group}/>
      <h3 className='text-white'>Google Play</h3>
      </div>
    </div>
    </div>
    </div>
  </div>

  <div className="container-fluid text-center text-md-left" style={{'background-color':'#070917'}}>
    <div className="row">
        <div className="col-md-6 mt-4">            
            <h5 className="text-uppercase mb-3 mt-4"style={{ color: '#DA722C' }}>Links Rápidos</h5>
            <ul className="list-group" style={{'background-color':'#070917'}}>
                <li className="list-group-item border-0" style={{'background-color':'#070917'}} > <a className='text-decoration-none text-white' href="#!">Fale Conosco</a></li>
                <li className="list-group-item border-0" style={{'background-color':'#070917'}}> <a className='text-decoration-none text-white' href="#!">Quem somos</a></li>
                <li className="list-group-item border-0" style={{'background-color':'#070917'}}> <a className='text-decoration-none text-white' href="#!">Política de privacidade</a></li>                
                <li className="list-group-item border-0" style={{'background-color':'#070917'}}> <a className='text-decoration-none text-white' href="#!">Termos e Condições</a></li>
            </ul>
        </div>
        <div className="col-md-6 mb-md-0 mb-3 mt-3">
            <h5 className="text-uppercase mb-3 mt-4"style={{ color:'#DA722C' }}>Curso</h5>
            <ul className="list-group">
                <li className="list-group-item border-0" style={{'background-color':'#070917'}}><a className='text-decoration-none text-white' href="#!">Login</a></li>
                <li className="list-group-item border-0" style={{'background-color':'#070917'}}><a className='text-decoration-none text-white' href="#!">Download</a></li>
                <li className="list-group-item border-0" style={{'background-color':'#070917'}}><a className='text-decoration-none text-white' href="#!">Todos os cursos</a></li>                
            </ul>
        </div> 
        <div className="col-md-6 mb-md-0 mb-3 mt-3">
            <h5 className="mb-3 mt-4" style={{ 'color': '#DA722C' }}>CONTATO</h5>
            <ul className="list-unstyled list-group">
                <li className="list-group-item border-0" style={{'background-color':'#070917'}}><a className='text-decoration-none  text-white' href="#!">Contato@gmail.comv</a></li>
            </ul>
            <div className="text-center">
                <img src={Insta} className="rounded m-3" alt="icone do instagram"/>
                <img src={Face} className="rounded m-3" alt="icone do facebook"/>
            </div>
            <form>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label" aria-label="Campo de entrada para o e-mail de usuário"></label>
                <input type="email" className="form-control"/>
                <small id="emailHelp" className="form-text text-muted">Por favor, insira seu endereço de email.</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mb-3">
          </div>
        </div>
    </div>
  </div>
</footer>
    );
}

export default Footerr

