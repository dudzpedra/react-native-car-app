import { Text, View } from "react-native";
import Avatar from "../../components/Avatar";
import styledComponents from "styled-components";
import Title from "../../components/Title";
import Header from "../../components/Header";

const DetailsView = styledComponents.View`
    background-color: papayawhip
    height: 100%
`

const DetailsText = styledComponents.Text`
    text-align: center
    color: purple
    font-size: 24px
`;

const CarDetails = styledComponents.View`
    background-color: papayawhip
    border: 2px solid purple
    border-radius: 24px
    width: 90%
    margin: 5% auto
    padding: 2%
`;

const DetailsScreen = ({ navigation, route }) => {
  return (
    <DetailsView>
      <Header />
      <CarDetails>
        <DetailsText>Model: {route.params.car.title}</DetailsText>
        <DetailsText>Brand: {route.params.car.brand}</DetailsText>
        <DetailsText>Age: {route.params.car.age}</DetailsText>
        <DetailsText>Price: R$ {route.params.car.price}</DetailsText>
      </CarDetails>
    </DetailsView>
  );
};

export default DetailsScreen;
