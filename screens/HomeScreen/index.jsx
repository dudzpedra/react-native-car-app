import styledComponents from "styled-components";
import { Button, ImageBackground } from "react-native";
import TheButton from "../../components/TheButton";
import CarouselCards from "../../components/Carousel/CarouselCards";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/auth";

const img = {
  uri: "https://images.pexels.com/photos/1644794/pexels-photo-1644794.jpeg",
};

const MainView = styledComponents.View`
  width: 80%
  margin: 0 auto
`;

const ButtonView = styledComponents.View`
  width: 40%
  margin: 2% auto
`;

const HomeScreen = ({ navigation }) => {
  const { signOut } = useAuth();

  const handleSignOut = () => signOut();

  return (
    <ImageBackground
      source={img}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
      }}
    >
      <Header />
      <MainView>
        <CarouselCards />
      </MainView>
      <ButtonView>
        <TheButton navigation={navigation} text="See All Cars" path="All" />
      </ButtonView>
      <ButtonView>
        <Button title="SignOut" color="purple" onPress={handleSignOut} />
      </ButtonView>
    </ImageBackground>
  );
};

export default HomeScreen;
