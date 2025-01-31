import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export function NavBar() {
    const {colorMode, toggleColorMode} = useColorMode()

  return (


    <Container maxWidth={"1140px"} px={4} >
      <Flex
        h={16}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      > 
      <Link to={"/"}>
        <Text
          bgGradient="linear(to-r, #4fc2ca, #46699e)"
          bgClip="text"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="extrabold"
          textTransform={"uppercase"}
        >
         Market Shop
        </Text>
        </Link>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={'/create'}>
            <Button><PlusSquareIcon fontSize={20} /></Button>
          </Link>

          <Link to={'/'}>
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</Button>
          </Link>
        </HStack>
        
      </Flex>
    </Container>
  );
}
