import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useProdutoStore } from "../../store/produto";

export function ProdutoCard({ produto }) {
  const bg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.200");

  const toast = useToast();

 const {deleteProduto} = useProdutoStore()
 const handleDelete = async (pid) => {
   const {success,message} = await deleteProduto(pid)
   if(!success){
    toast({
        title: 'Erro',
        description: message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
   }else {
    toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
   }
 }


  return (
    <Box
      shadown="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
     
    >
      <Image
        src={produto.image}
        alt={produto.name}
        h={48}
        w={"full"}
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {produto.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${produto.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme="blue" />

          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDelete(produto._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>
    </Box>
  );
}
