import React from "react";
import Insta from  '../../assets/images/instagram.svg';
import Face from '../../assets/images/facebook.svg';

function Footere () {
    return(
<>
<footer className="page-footer font-small blue pt-4">
<div className="container-fluid text-center text-md-left">
    <div className="row">
        <div className="col-md-6 mt-3">            
            <h5 className="text-uppercase mb-3">Links Rápidos</h5>
            <ul className="list-unstyled list-group">
                <li className="list-group-item border-0"><a href="#!">Fale Conosco</a></li>
                <li className="list-group-item border-0"><a href="#!">Quem somos</a></li>
                <li className="list-group-item border-0"><a href="#!">Política de privacidade</a></li>                
                <li className="list-group-item border-0"><a href="#!">Termos e Condições</a></li>
            </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3 mt-3">
            <h5 className="text-uppercase mb-3">Curso</h5>
            <ul className="list-unstyled list-group">
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
</>
    );
}

export default Footere