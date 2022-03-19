import styledComponents from "styled-components";
import { Button } from 'react-native'
import TheButton from "../../components/TheButton";
import CarouselCards from "../../components/Carousel/CarouselCards";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/auth";

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
  margin: 2% auto
`;

const HomeScreen = ({ navigation }) => {
  const { signOut } = useAuth()

  const handleSignOut = () => signOut()
  
  return (
    <HomeView>
      <Header />
      <MainView>
        <CarouselCards />
        <ButtonView>
          <TheButton navigation={navigation} text="See All Cars" path="All" />
        </ButtonView>
      </MainView>
      <ButtonView>
        <Button title="SignOut" color='purple' onPress={handleSignOut} />
      </ButtonView>
    </HomeView>
  );
};

export default HomeScreen;
