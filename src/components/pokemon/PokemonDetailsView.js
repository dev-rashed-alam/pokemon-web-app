import React, {useEffect, useState} from "react"
import {Grid,Box} from "@chakra-ui/react";
import pokemon from "../../assets/styles/pokemon.module.css";
import ApiHandler from "../../config/ApiHandler";

const PokemonDetailsView = ({identifier}) => {

    const [pokemon,setPokemon] = useState({});

    useEffect(() => {
        ApiHandler.getApi("pokemon/" + identifier).then((response) => {
            setPokemon(response.data);
        }).catch((error) => {
            console.log(error)
        })
    },[]);

    const {image,name} = pokemon;
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <div className={pokemon.item}>
                <div>
                    <img src={image} alt={name} className={pokemon.image}/>
                </div>
                <div className={pokemon.details}>
                    <h3>{name}</h3>
                    <p>Type: ""</p>
                </div>
            </div>
        </Grid>
    );
};

export default PokemonDetailsView