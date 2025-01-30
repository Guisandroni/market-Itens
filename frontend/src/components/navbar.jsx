import { Button, Container, Flex, HStack, Link, Text, useColorMode } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
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
        <Text
          bgGradient="linear(to-r, #4fc2ca, #46699e)"
          bgClip="text"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="extrabold"
          textTransform={"uppercase"}
        >
          <Link to={"/"}>Market Shop</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={'/'}>
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
