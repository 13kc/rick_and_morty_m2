import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const URL = 'https://rym2.up.railway.app/api/character';
const API_KEY = "henrystaff";

export default function Detail(props) {

    const { id } = useParams();
    const [character, setCharacters] = useState({});
     useEffect(() => {
        axios(`${URL}/${id}?key=${API_KEY}`)
        .then(
            ({ data }) => {
                if(data.name){
                    console.log(data);
                    setCharacters(data);
                } else {
                    window.alert('No hay personajes con ese numero de ID');
                }
            }
        );
        return setCharacters({});
     }, [id]);

    return (
        <div>
            <h1>Details</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name}/>
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Location: {character.location?.name}</h3>
        </div>
    );
}