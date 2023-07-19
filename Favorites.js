import { Box, NativeBaseProvider, Text, View } from 'native-base';
import React from 'react';

const favorites = []

export default function Favorites() {
    return (
        <NativeBaseProvider>
            <Box bg="#fff" flex={1}>
                <Text>Favoritos</Text>
            </Box>
        </NativeBaseProvider>
    );
}