import React from "react";
import {Input, InputGroup, InputLeftElement, Stack} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";

const SearchBar = () => {
    return (
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300"/>}
                />
                <Input type="tel" placeholder="Enter the name" name="search"/>
            </InputGroup>
        </Stack>
    )
};

export default SearchBar;