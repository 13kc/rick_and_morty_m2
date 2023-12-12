import React from "react";
import SearchBar from "../searchbar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import './Nav.css'

export default function Nav(props){

    const searchBarPlaceholder = "Buscar tu personaje...";

    return(
        <div className="navbar">
            
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/favorites">
                <button>Favorites</button>
            </NavLink>
            <button onClick={props.logout}>Logout❌</button>
            
            <SearchBar onSearch={props.onSearch} placeholder={searchBarPlaceholder} />
        </div>
    )
}