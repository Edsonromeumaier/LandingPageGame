import photohis from '../../assets/images/photo-his.svg'
import photoher from '../../assets/images/photo-her.svg'
function SectionDepo () {
    return(
<>       
  <div className="col-lg-8 mx-auto p-4 py-md-5">    
    <h2 className='card-title text-body-emphasis'>O que nossoa alunos dizem</h2>
    <p className='card-text fs-5 col-md-8'>Todos os alunos têm acesso a todos os vídeos e também ao código-fonte dos projetos
        . Você também terá acesso a um canal privado do Discord onde poderá discutir suas dúvidas.</p>
    
    
    <div className="card">
      
      <div className="card-body">

        <img className='' src={photohis} alt='foto de usuário'/> 
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary"></a>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <img className='' src={photoher} alt='foto de ususário'/>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>   
  </div>
</>
);
}
 export default SectionDepo;