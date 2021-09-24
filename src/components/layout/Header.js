import React from "react"
import {Box, Flex, Text} from "@chakra-ui/react"
import style from "../../assets/styles/header.module.css"

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
                    <Text className={style.logo}>Pokemon</Text>
                </Box>
                <Box p="2">
                    <Text className={style.headerContent}>UserName</Text>
                    <Text className={style.headerContent}>Total Pokemon</Text>
                </Box>
            </Flex>
        </div>
    )
};

export default Header;