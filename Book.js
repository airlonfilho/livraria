import React, { useContext, useState } from 'react';
import { Box, Text, Heading, HStack, VStack, Link } from "native-base";
import { BooksContext } from './Home';
import Icon from 'react-native-vector-icons/AntDesign';

import Rating from './Rating';
import { TouchableWithoutFeedback } from 'react-native';


export default function Book() {
    const { books, setBooks } = useContext(BooksContext);

    const [favorite, setFavorite] = useState([]);

    return (
        <Box alignItems="center">
            {
                books.hits.map((book, index) => {
                    return <Box w="350" mt="2" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700"
                    }} _web={{
                        shadow: 2,
                        borderWidth: 0
                    }} _light={{
                        backgroundColor: "gray.50"
                    }}
                    >
                        <VStack p="4" space={3}>
                            <Heading size="md" ml="-1" >
                                {book.title || 'Sem titulo'}
                            </Heading>
                            <Text fontSize="md" _light={{
                                color: "gray.600"
                            }} _dark={{
                                color: "gray.200"
                            }} fontWeight="500" ml="-0.5" mt="-1" >
                                {book.author || 'Autor desconhecido'}
                            </Text>
                            <HStack alignItems="center">
                                <Link href={book.url}>
                                    <Text color="violet.500" _dark={{
                                        color: "violet.400"
                                    }} fontWeight="600" >
                                        Ir para livro
                                    </Text>
                                </Link>

                            </HStack>
                            <Box flexDirection="row">
                                <Rating rating='' />
                            </Box>
                        </VStack>
                    </Box>
                })
            }
        </Box>
    )
}