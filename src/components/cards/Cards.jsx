import Card from '../card/Card.jsx';
import './Cards.css'

export default function Cards({ characters, onClose}) {
   return (
   <div className='cards-container'>
    {
      !characters.length
          ? <h2 className='texto'>Por favor ingresar un id...</h2>
          :
      characters.map(character => (
         <Card
            key= {character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
        />
      ))
    }
   </div>
   );
}
