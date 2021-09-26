import React from "react"
import {Box, Flex, Text} from "@chakra-ui/react"
import style from "../../assets/styles/header.module.css"
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={style.header}>
            <Flex
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                {...props}
            >
                <Box p="2">
                    <Link to="/"><Text className={style.logo}>Pokemon</Text></Link>
                </Box>
                <Box p="2">
                    <Text className={style.headerContent}>My Pokemon (0)</Text>
                </Box>
            </Flex>
        </div>
    )
};

export default Header;