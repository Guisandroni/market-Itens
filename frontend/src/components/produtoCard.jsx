import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react";

export function ProdutoCard({produto}){
    const bg= useColorModeValue('white','gray.700')
    const textColor = useColorModeValue('gray.600', 'gray.200')
    return(

        <Box
            shadown='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{transform: 'translateY(-5px)', shadow:'xl'}}
            bg={bg}
        >

        <Image src={produto.image} alt={produto.name} h={48} />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {produto.name}
            </Heading>

            <Text fontWeight='bold' fontiSize='xl' color={textColor} mb={4}>
                ${produto.price}
            </Text>

            <HStack spacing={2}>
                <IconButton icon={<EditIcon/>}  colorScheme="blue"/>

                <IconButton icon={<DeleteIcon/>} colorScheme="red"/>
            </HStack>
        </Box>
        </Box>
    )
}