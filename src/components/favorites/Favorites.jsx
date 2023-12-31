import Card from '../card/Card';
import { useDispatch, useSelector} from 'react-redux';
import { filteredCards, orderCards } from "../../redux/actions.js"

export default function Favorites({onClose}) {

  const myFavorites = useSelector(state => state.myFavorites);

  const dispatch = useDispatch();

  const handleOrder = event => {
    dispatch(orderCards(event.target.value));
  }
  const handleFilter = event => {
    dispatch(filteredCards(event.target.value));
  }


   return (
      <div className='cards-container'>
        <div>
          <select name="order" onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <select name="filter" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div>
          { 
            !myFavorites.length
            ? <h2>No hay favoritos</h2>
            :
            myFavorites.map(myFavorite => (
               <Card
                  key= {myFavorite.id}
                  id={myFavorite.id}
                  name={myFavorite.name}
                  status={myFavorite.status}
                  species={myFavorite.species}
                  gender={myFavorite.gender}
                  origin={myFavorite.origin}
                  image={myFavorite.image}
                  onClose={onClose}
               />
           ))
        }
     </div>
   </div>
   );
}
