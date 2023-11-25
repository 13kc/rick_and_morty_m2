
import { useEffect, useState} from 'react';
import { removeFav } from './redux/actions.js'
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/nav.jsx';
import axios from "axios";
import Favorites from './components/favorites/Favorites.jsx'
import About from './components/about/About.jsx'
import Detail from './components/detail/Detail.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Form from './components/form/Form.jsx';
import { useDispatch } from 'react-redux'

const URL = 'https://rickandmortyapi.com/api/character';
const API_KEY = "henrystaff"

function App() {

   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const location =useLocation();
   const dispatch = useDispatch();

   function onSearch(id) {
   
      const characterId = characters.filter(char => char.id === Number(id))
      if (characterId.length) {
          return alert(`${characterId[0].name} ya existe!`)
      }
      axios(`${URL}/${id}?key=${API_KEY}`)
      .then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡El id debe ser un numero entre 1 y 826!');
            }
         });
      navigate("/home");
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)));
      dispatch( removeFav(id));
}

   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.pasword === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Credenciales incorrectas!");
      }
   }

   function logout() {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/home');
   }, [access]);


   return (
      <div className='App'>
         
         {
            location.pathname === '/home' || location.pathname === '/about' || location.pathname.startsWith('/detail/') || location.pathname === '/favorites' ? <Nav onSearch={onSearch}  /> : null
         }
         <Routes>
         
            <Route 
               path="/home" 
               element={<Cards 
               characters={characters} 
               onClose = {onClose} />}
               />
            <Route
               path='/about'
               element={<About />}
               />
            <Route
               path='/favorites'
               element={<Favorites onClose={onClose} />} 
            />
            <Route
               path='/detail/:id'
               element={<Detail />}
               />
            <Route
               path="*"
               element={<NotFound />}
             />
            <Route 
             path='/'
             element={<Form/>}
               />
          </Routes>
      </div>
   );
}

export default App;