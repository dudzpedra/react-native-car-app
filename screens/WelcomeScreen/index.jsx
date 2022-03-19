import styledComponents from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../components/Login";
import { ImageBackground } from "react-native";

const img = { uri: 'https://images.pexels.com/photos/1644794/pexels-photo-1644794.jpeg' }

const WelcomeTitle = styledComponents.Text`
    font-size: 26px
    margin: 5% auto
`;

const Instructions = styledComponents.Text`
    font-size: 20px
    padding: 1%
    margin: 1% auto
`;

const WelcomeScreen = ({ navigation }) => {
  return (
      <ImageBackground source={img} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', alignItems:'center', opacity: 0.7}}>  
        <Header />
        <WelcomeTitle>Welcome to the Cars App!</WelcomeTitle>
        <Instructions>Please login:</Instructions>
        <Login navigation={navigation} />
        <Footer />
      </ImageBackground>
  );
};

export default WelcomeScreen;
