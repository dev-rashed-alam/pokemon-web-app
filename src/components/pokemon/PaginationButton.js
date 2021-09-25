import React from "react";
import {Button, Stack} from "@chakra-ui/react";
import pokemon from "../../assets/styles/pokemon.module.css"

const PaginationButton = ({previousPage, nextPage}) => {
    return (
        <Stack mt={5} direction="row-reverse" align="center">
            {previousPage && <Button colorScheme="teal" size="sm" className={pokemon.btn}>
                Previous Page
            </Button>}
            {nextPage && <Button colorScheme="teal" size="sm" className={pokemon.btn}>
                Next Page
            </Button>}
        </Stack>
    )
};

export default PaginationButton