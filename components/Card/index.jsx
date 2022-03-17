import { Text } from "react-native";
import styledComponents from "styled-components";

const CardView = styledComponents.View`
    background-color: papayawhip;
    padding: 10%
    width: 50%
    border: 1px solid #ac8cdb
    margin: 2% auto
`;

const Card = ({ car }) => {
  return (
    <CardView>
      <Text>Model: {car.title}</Text>
      <Text>Brand: {car.brand}</Text>
      <Text>Age: {car.age}</Text>
      <Text>Price: {car.price}</Text>
    </CardView>
  );
};

export default Card;
