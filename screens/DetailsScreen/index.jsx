import { Text, View } from "react-native";
import Avatar from "../../components/Avatar";
import styledComponents from "styled-components";

const DetailsView = styledComponents.View`
    background-color: #ac9cdc
    height: 100%
`

const DetailsText = styledComponents.Text`
    text-align: center
    color: #ac8cdb
    font-size: 24px
`;
const CarDetails = styledComponents.View`
    background-color: papayawhip
    border: 2px solid #ac8cdb
    border-radius: 24px
    width: 90%
    margin: 5% auto
    padding: 2%
`;

const DetailsAvatar = styledComponents.View`
    margin: 5% auto
`;

const DetailsScreen = ({ navigation, route }) => {
  return (
    <DetailsView>
      <DetailsAvatar>
        <Avatar />
      </DetailsAvatar>
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
