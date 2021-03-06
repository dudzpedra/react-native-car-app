import styledComponents from "styled-components";
import Avatar from "../Avatar";
import TheButton from "../TheButton";

const CardView = styledComponents.View`
    background-color: papayawhip;
    padding: 4%
    width: 80%
    border: 2px solid purple
    margin: 2% auto
    border-radius: 24px
`;

const HeaderView = styledComponents.View`
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    margin: 5%
    max-width: 100%
`;

const TextView = styledComponents.Text`
    margin: 2% 20%
`

const Card = ({ car, navigation }) => {
  return (
    <CardView>
      <HeaderView>
        <Avatar />
        <TextView>{car.title}, {car.age}</TextView>
      </HeaderView>
      <TheButton text='Details' navigation={navigation} car={car} path="Details"/>
    </CardView>
  );
};

export default Card;
