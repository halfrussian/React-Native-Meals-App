import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import styled from "styled-components/native";


const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};

`
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`
const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.body} 
font-size: ${(props) => props.theme.fontSizes.caption} 
`
const Title = styled.Text`
font-family: ${(props) => props.theme.fonts.heading} 
font-size: ${(props) => props.theme.fontSizes.body} 
  color: ${(props) => props.theme.colors.ui.primary};
`

export const RestaurantInfoCard = ({ restaurant = {}}) => {


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
<RestaurantCard elevation={5}>
    <RestaurantCardCover key={name} source={{ uri: photos[0]}}/>
    <Info>
      <Title>{name}</Title>
      <Address>
        {address}
      </Address>
    </Info> 
  </RestaurantCard>

</>
  )
  
}

