import { View } from "react-native";
import { useRef } from "react";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselCardItem";
import images from "./images";
import styledComponents from "styled-components";

const CarouselView = styledComponents.View`
  width: 100%
  align-items: center
  margin: 5% auto
  padding: 2%
`

const CarouselCards = () => {
  const isCarousel = useRef(null);
  return (
    <CarouselView>
      <Carousel
        data={images}
        renderItem={CarouselItem}
        ref={isCarousel}
        layout="default"
        useScrollView={true}
        inactiveSlideShift={0}
        sliderWidth={300}
        itemWidth={300}
      />
    </CarouselView>
  );
};

export default CarouselCards;
