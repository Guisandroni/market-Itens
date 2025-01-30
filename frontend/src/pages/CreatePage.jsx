import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from "@chakra-ui/react";
import { useState } from "react";

export function CreatePage() {
  const [newProduto, setNewProduto] = useState({
    name: "",
    price: "",
    image: "",
  });

  function handleAddProduto(){
    console.log(newProduto)
  }
  return (
    <Container maxWidth={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
          Criar Novo Produto
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack>
            <Input
              placeholder="Nome Produto"
              name="nome"
              value={newProduto.name}
              onChange={(e) =>
                setNewProduto({ ...newProduto, name: e.target.value })
              }
            />

            <Input
              placeholder="Preço"
              name="Preço"
              type="number"
              value={newProduto.price}
              onChange={(e) =>
                setNewProduto({ ...newProduto, price: e.target.value })
              }
            />

            <Input
              placeholder="Image"
              name="image"
              value={newProduto.image}
              onChange={(e) =>
                setNewProduto({ ...newProduto, image: e.target.value })
              }
            />

            <Button onClick={handleAddProduto} w='full' colorScheme="blue"> 
                Add Produto
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
