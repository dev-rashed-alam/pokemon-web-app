import React from "react";
import {Button, Input, InputGroup, InputLeftElement, Stack} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";
import pokemon from "../../assets/styles/pokemon.module.css";

const SearchBar = () => {
    return (
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300"/>}
                />
                <Input type="tel" placeholder="Enter the name" name="search"/>
                <Button ml={2} size="md" className={pokemon.btn}>
                    Search
                </Button>
            </InputGroup>
        </Stack>
    )
};

export default SearchBar;