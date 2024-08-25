import photohis from '../../assets/images/photo-his.svg'
import photoher from '../../assets/images/photo-her.svg'
function SectionDepo () {
    return(
  <div className="col-lg-8 mx-auto p-4 py-5 mb-5">    
      <div className='mb-5'>
        <h2 className='card-title text-body-emphasis fs-1 fw-bold '>O que nossoa alunos dizem</h2>
        <p className='card-text fs-4 lh-2 col-md-8 '>Todos os alunos têm acesso a todos os vídeos e também ao código-fonte dos projetos
            . Você também terá acesso a um canal privado do Discord onde poderá discutir suas dúvidas.
        </p>
      </div>

      <div className=''>  
        
          <div className="card shadow-lg mb-4" style={{'border-radius':'2.8em'}}>
            <div className="card-header card-header" style={{'background-color':'#6f7dfb','marginTop':'-0.2rem', 'border-radius':'2.8em'}} >
            <p className="text-white fs-4 fw-bold">Este é um ótimo curso. Isso me ajudou muito. Obrigado :) </p>
            </div>
            <div className="card-body" style={{'marginBottom':'-2rem'}}>
                <figure className='d-flex justify-content-around'style={{'marginTop':'-2rem'}}>              
                <figcaption className='float-start mt-4'><h2 className="card-title text-body-emphasis fs-1 fw-bold "> Jana cooper </h2>
                <p>Consultora abstrativa</p></figcaption>
                <img className='float-end' style={{'marginTop':'-2rem'}} src={photoher} alt='foto de ususário'/>
                </figure>
            </div>          
          </div>

          <div className="card shadow-lg mb-4" style={{'border-radius':'2.8em' }}>
            <div className="card-header card-header rounded-pill" style={{'background-color':'#da772c','marginTop':'-0.2rem'}}>
              <p className='text-white fs-4 fw-bold'> Trabalho incrível! Muito bem! </p> 
            </div>
            <div className="card-body" style={{'marginBottom':'-2rem'}}>
                <figure className='d-flex justify-content-around'style={{'marginTop':'-2rem'}}>               
                <figcaption className='float-start mt-4'><h2 className="card-title text-body-emphasis fs-1 fw-bold "> Jacob jones </h2>
                <p>Designer, Facebook</p></figcaption>
                <img className='float-end ' src={photohis} alt='foto de ususário'/>
                </figure>
            </div>
          </div>
      </div>
      
      <div className='m-5 '>        
          <a href="#" className="float-end text-white btn rounded-5" style={{'background-color':'#da722c', 'font-size':'1rem', 'fontWeight':700}}> saiba mais </a>
      </div>     
  </div>
  
);
}
 export default SectionDepo