import { Box, Button, Container, Heading, Input,  useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProdutoStore } from "../../store/produto";

export function CreatePage() {
  const [newProduto, setNewProduto] = useState({
    name: "",
    price: "",
    image: "",
  });

 const {createProduto} = useProdutoStore()
 const toast = useToast()

 const handleAddProduto = async () =>{
    const {success,message} = await createProduto(newProduto)
  console.log("Success",success)
 console.log("Message", message)
    
    if(!success){
        toast({
            title: 'Erro',
            description: message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
    } else {
        toast({
            title: "Successo",
            description: message,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }

    setNewProduto({name:"",price:"",image:""})
 }

  return (
    <Container maxWidth={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"}  size={"2xl"} textAlign={"center"} mt={20} mb={8}>
          Novo Produto
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
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
              name="price"
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
