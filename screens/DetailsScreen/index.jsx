import { ImageBackground } from "react-native";
import styledComponents from "styled-components";
import CarouselCards from "../../components/Carousel/CarouselCards";
import Header from "../../components/Header";
const img = { uri: 'https://images.pexels.com/photos/1644794/pexels-photo-1644794.jpeg' }

const DetailsView = styledComponents.View`
    height: 100%
`;

const DetailsText = styledComponents.Text`
    text-align: center
    color: purple
    font-size: 20px
`;

const CarDetails = styledComponents.View`
    background-color: papayawhip
    border: 2px solid purple
    border-radius: 24px
    width: 90%
    margin: 3% auto
    padding: 2%
`;

const DetailsScreen = ({ route }) => {
  return (
    <DetailsView>
      <ImageBackground source={img} resizeMode="cover" style={{ opacity: 0.7 }}>
        <Header />
        <CarouselCards />
        <CarDetails>
          <DetailsText>Model: {route.params.car.title}</DetailsText>
          <DetailsText>Brand: {route.params.car.brand}</DetailsText>
          <DetailsText>Age: {route.params.car.age}</DetailsText>
          <DetailsText>Price: R$ {route.params.car.price}</DetailsText>
        </CarDetails>
      </ImageBackground>
    </DetailsView>
  );
};

export default DetailsScreen;
