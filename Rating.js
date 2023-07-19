import { Box, Text } from 'native-base';
import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Rating(props){
    
    const [rating, setRating] = useState(props.rating);
    return (
       <Box flexDirection="row">
        { rating >= 1 ?  (
            <TouchableWithoutFeedback onPress={() => setRating(1)}>
                <Icon name="star" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        ) : (
            <TouchableWithoutFeedback onPress={() => setRating(1)}>
                <Icon name="staro" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        )}
        { rating >= 2 ?  (
            <TouchableWithoutFeedback onPress={() => setRating(2)}>
                <Icon name="star" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        ) : (
            <TouchableWithoutFeedback onPress={() => setRating(2)}>
                <Icon name="staro" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        )}
        { rating >= 3 ?  (
            <TouchableWithoutFeedback onPress={() => setRating(3)}>
                <Icon name="star" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        ) : (
            <TouchableWithoutFeedback onPress={() => setRating(3)}>
                <Icon name="staro" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        )}
        { rating >= 4 ?  (
            <TouchableWithoutFeedback onPress={() => setRating(4)}>
                <Icon name="star" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        ) : (
            <TouchableWithoutFeedback onPress={() => setRating(4)}>
                <Icon name="staro" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        )}
        { rating >= 5 ?  (
            <TouchableWithoutFeedback onPress={() => setRating(5)}>
                <Icon name="star" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        ) : (
            <TouchableWithoutFeedback onPress={() => setRating(5)}>
                <Icon name="staro" color='#facc15' size='24' />
            </TouchableWithoutFeedback>
        )}
       </Box>
    )
   }
