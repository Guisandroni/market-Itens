import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ProdutoCard } from "../components/produtoCard";
import { useEffect } from "react";
import { useProdutoStore } from "../../store/produto";


export function Home(){

    const {fetchProdutos, produtos} = useProdutoStore()

    useEffect(()=> {
        fetchProdutos()
    }), [fetchProdutos]


    return(
        <Container>

            <VStack>
            <Text
                fontSize={'30'}
                fontWeight={'bold'}
                bgGradient={"linear(to-r, cyan.400, blue.500"}
                bgClip={'text'}
                textAlign={'center'}
            >
                Produtos de Agora
            </Text>

            <SimpleGrid
                columns={{
                    base:1,
                    md:2,
                    lg:3,
                }}
                spacing={10}
                w={'full'}
            >
               {produtos.map((produto)=>(
                <ProdutoCard key={produto._id} produto={produto}/>
               )
            )}

            </SimpleGrid>

            <Text fontSize='xl' textAlign={'center'} fontWeight={'bold'} color='gray.500'>
                Sem produtos
            </Text>

            <Link to={'/create'}>
                <Text color='blue.500' _hover={{textDecoration:'underline'}}>
                    Crie um Produto
                </Text>
            </Link>
            </VStack>
        </Container>

    )
}