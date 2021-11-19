import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-paper';
export const RestaurantInfo = ({ restaurant = {}}) => {

  const { name = 'some rest', 
          icon, 
          photos = [
            'https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg'
          ], 
          address = '100 ran street',
          isOpenNow = true, 
          rating = 4, 
        isClosedTemporarily = '',
      } = restaurant;
  return (
<>
<Card>
    <Card.Actions>
    <View style={}>
      <img src={photos} alt="" />
    </View>
      <Text>{name}</Text>
    </Card.Actions>
  </Card>

</>
  )
  
}