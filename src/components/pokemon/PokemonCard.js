import React, {useEffect, useState} from "react";
import pokemon from "../../assets/styles/pokemon.module.css"

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
                <img src={image} alt={name} className={pokemon.image}/>
            </div>
            <div className={pokemon.details}>
                <h3>{name}</h3>
                <p>Type: {getType}</p>
            </div>
        </div>
    )
};

export default PokemonCard