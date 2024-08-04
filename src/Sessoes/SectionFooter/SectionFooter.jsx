
import Insta from  '../../assets/images/instagram.svg'
import Face from '../../assets/images/facebook.svg'
import Vector from '../../assets/images/Vector.svg'
import Group from '../../assets/images/Group.svg'
import '../../Sessoes/SectionFooter/SectionFooter.css'
function Footerr () {
    return(
<footer className="page-footer blue pt-4">
  <div className="text-center">
    <div className="row card-body gap-4 m-4 gap-md-0">
    <h5 className="mt-4 fs-2 fw-bold lh-lg">Baixe nosso App</h5>
    <p className="fw-bolder lh-lg">Você pode usar nosso aplicativo para uma melhor experiência em smartphones</p>    
    </div>
    
    <div className="row gap-4 m-4 gap-md-0">
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

  <div className="container-fluid text-center text-md-left bg-info">
    <div className="row">
        <div className="col-md-6 mt-3">            
            <h5 className="text-uppercase mb-3">Links Rápidos</h5>
            <ul className=" list-group">
                <li className="list-group-item border-0"><a className='text-decoration-none' href="#!">Fale Conosco</a></li>
                <li className="list-group-item border-0"><a className='text-decoration-none' href="#!">Quem somos</a></li>
                <li className="list-group-item border-0"><a className='text-decoration-none' href="#!">Política de privacidade</a></li>                
                <li className="list-group-item border-0"><a className='text-decoration-none' href="#!">Termos e Condições</a></li>
            </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3 mt-3">
            <h5 className="text-uppercase mb-3">Curso</h5>
            <ul className="list-group">
                <li className="list-group-item border-0"><a href="#!">Login</a></li>
                <li className="list-group-item border-0"><a href="#!">Download</a></li>
                <li className="list-group-item border-0"><a href="#!">Todos os cursos</a></li>                
            </ul>
        </div> 
        <div className="col-md-3 mb-md-0 mb-3 mt-3">
            <h5 className="text-uppercase mb-3">Contato</h5>
            <ul className="list-unstyled list-group">
                <li className="list-group-item border-0"><a href="#!">Contato@gmail.comv</a></li>
            </ul>
                <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Tentativa de acessibilidade</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text"> We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
            <div className="text-center">
                <img src={Insta} className="rounded" alt="icone do instagram"/>
                <img src={Face} className="rounded" alt="icone do facebook"/>
            </div>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Tentativa de acessibilidade</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  </div>
</footer>
    );
}

export default Footerr