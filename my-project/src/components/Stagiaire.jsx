
import '../components/Stagiaire.css';
const Stagiare = ({url,nom}) => {
   return(
    <>
      <div className='card'>
         <img src={url}  alt="" />
          <h2>{nom}</h2>
      </div>
    </>
   )
}

export default  Stagiare ;