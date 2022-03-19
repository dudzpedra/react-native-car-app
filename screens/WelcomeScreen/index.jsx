import styledComponents from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../components/Login";
import TheButton from "../../components/TheButton";
import { useAuth } from "../../contexts/auth";

const WelcomeView = styledComponents.View`
    padding: 2%
    align-items: center
    background-color: papayawhip
    height: 100%
`;

const WelcomeTitle = styledComponents.Text`
    font-size: 26px
    margin: 5% auto
`;

const Instructions = styledComponents.Text`
    font-size: 20px
    padding: 1%
    margin: 1% auto
`

const WelcomeScreen = ({ navigation }) => {
  const { signed } = useAuth()
  console.log(signed)
  return (
    <WelcomeView>
      <Header />
      <WelcomeTitle>Welcome to the Cars App!</WelcomeTitle>
      <Instructions>Please login:</Instructions>
      <Login navigation={navigation} />
      <Instructions>OR</Instructions>
      <TheButton navigation={navigation} path="Home" text="Enter as a Guest" />
      <Footer />
    </WelcomeView>
  );
};

export default WelcomeScreen;
