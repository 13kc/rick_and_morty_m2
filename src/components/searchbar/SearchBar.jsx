import React from "react";
import './Searchbar.css'

export default function SearchBar(props) {

   const [id, setId] = React.useState("");

   const handleChange = event => {
      const {value} = event.target;
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   const handleRandom = () => {
       const randomPersonaje = Math.floor(Math.random() * 826) +1;
       props.onSearch(randomPersonaje);
   };

   return (
      <div className="searchbar">
         <input 
           type='text' 
           name = "search"
           id="search"
           placeholder={props.placeholder}
           onChange={handleChange}
           value={id}
         />
         <button onClick={handleClick}>Agregar</button>
         <button onClick={handleRandom}>Random</button>
      </div>
   );
}
