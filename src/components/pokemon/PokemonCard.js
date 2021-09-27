import React, {useEffect, useState} from "react";
import pokemon from "../../assets/styles/pokemon.module.css"
import {Link} from "react-router-dom";

const PokemonCard = ({name, image, type}) => {

    const [getType, setType] = useState("");

    useEffect(() => {
        let typeString = "";
        type.forEach((item) => {
            typeString = typeString ? typeString + "," + item.type.name : item.type.name;
        });
        setType(typeString);
    }, [type]);

    return (
        <div className={pokemon.item}>
            <div>
                <Link to={`/details/${name}`}><img src={image} alt={name} className={pokemon.image}/></Link>
            </div>
            <div className={pokemon.details}>
                <Link to={`/details/${name}`}><h3>{name}</h3></Link>
                <p>Type: {getType}</p>
            </div>
        </div>
    )
};

export default PokemonCard