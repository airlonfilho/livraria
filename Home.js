import React, { useReducer, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, ScrollView, Input, Text, Center, Image, HStack } from "native-base";
import Icon from 'react-native-vector-icons/AntDesign';
import Book from './Book';

export const BooksContext = React.createContext();

export default function Home() {
    const [state, dispatch] = useReducer(booksReducer, books);
    const [searchText, setSearchText] = useState('');
    const [books, setBooks] = useState({ hits: [] });
    const [showBooks, setShowBooks] = useState(false);

    const handleSubmit = () => {
        setBooks({ hits: [] });
        setShowBooks(true);
        const getData = async () => {
            const apiResponse = await fetch(
                `https://hn.algolia.com/api/v1/search?query=${searchText}`
            );
            const data = await apiResponse.json();
            setBooks(data);
        };
        getData();
    }

    return (
            <ScrollView width="100%" bg="#fff">
                <Box alignItems="center">
                    <Box alignItems="center" mt={5}>
                        <HStack space={1}>
                            <Center>
                                <Input size="lg" w="305" placeholder="Procure um tema aqui"
                                    onChangeText={text => setSearchText(text)}
                                    value={searchText} />
                            </Center>
                            <Center ml="1" borderWidth="1" borderColor="cyan.500" p={1} borderRadius="md">
                            <Icon onPress={handleSubmit} name="search1" color='#06b6d4' size='24' />
                            </Center>
                        </HStack>
                    </Box>
                </Box>
                <Box bg="#fff" alignItems="center" justifyContent="center" mb={4}>
                    {
                        showBooks ? (
                            <BooksContext.Provider value={{ books, setBooks }}>
                                <Book />
                            </BooksContext.Provider>
                        ) :
                            (
                                <Center flex={1} mt={32}>
                                    <Image source={require('./assets/searching-data.png')} alt="Search Image" size="2xl" />
                                    <Text mx="12" justifyContent="center" textAlign="center" fontSize="md"> Utilize o campo de busca para encontrar livros do seu interesse.</Text>
                                </Center>
                            )
                    }
                </Box>
            </ScrollView>

    );
}

function booksReducer(state, action) {
    switch (action.type) {
        case 'add':
            const addedBooks = [action.payload]
            console.debug(addedBooks)
            return { books: addedBooks }
        default:
            return '';
    }
}