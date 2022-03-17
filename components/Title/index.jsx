import { Text } from "react-native";
import styledComponents from "styled-components";

const TitleView = styledComponents.View`
    padding: 2%
    margin: 10%
    `;

const TextView = styledComponents.Text`
    font-size: 32px
    text-align: center
`;

const Title = () => {
  return (
    <TitleView>
      <TextView>Cars App</TextView>
    </TitleView>
  );
};

export default Title;
