import React from 'react';
import {Box, Link, Flex, Spinner, Button} from "@chakra-ui/react";
import NextLink from "next/link";
import {useLogoutMutation, useMeQuery} from "../generated/graphql";

const NavBar = () => {
    const [{fetching: logoutFetching}, logout] = useLogoutMutation()
    const [{data, fetching}] = useMeQuery()

    // if (fetching) {
    //     return <Box>
    //         <Spinner />
    //     </Box>
    // }
    //
    // if (data?.me) {
    //     return <Flex gap={5}>
    //         <Box>{data.me.username}</Box>
    //         <Button variant="link">Logout</Button>
    //     </Flex>
    // }

    return <Flex bg="lightsalmon" p="4" gap={5}>
        <Box ml="auto">Chopsqd</Box>
        <Button
            variant="link"
            onClick={logout}
            isLoading={logoutFetching}
        >
            Logout
        </Button>
    </Flex>

    // return (
    //     <Flex bg="lightsalmon" p="4">
    //         <Box ml="auto">
    //             <NextLink href={'/login'}>
    //                 <Link mr="2">Login</Link>
    //             </NextLink>
    //             <NextLink href={'/register'}>
    //                 <Link>Register</Link>
    //             </NextLink>
    //         </Box>
    //     </Flex>
    // );
};

export default NavBar;
