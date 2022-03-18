import styledComponents from "styled-components";
import TheButton from "../../components/TheButton";
import CarouselCards from "../../components/Carousel/CarouselCards";
import Header from "../../components/Header";

const HomeView = styledComponents.View`
    background-color: papayawhip
    height: 100%
`;

const MainView = styledComponents.View`
  width: 80%
  margin: 0 auto
`;

const ButtonView = styledComponents.View`
  width: 60%
  margin: 0 auto
`;

const HomeScreen = ({ navigation }) => {
  return (
    <HomeView>
      <Header />
      <MainView>
        <CarouselCards />
        <ButtonView>
          <TheButton navigation={navigation} text="See All Cars" path="All" />
        </ButtonView>
      </MainView>
    </HomeView>
  );
};

export default HomeScreen;
