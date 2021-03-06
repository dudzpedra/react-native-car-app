import styledComponents from "styled-components";

const TitleView = styledComponents.View`
    padding: 2%
    margin: 10%
    `;

const TextView = styledComponents.Text`
    font-size: 32px
    text-align: center
    color: purple
`;

const Title = () => {
  return (
    <TitleView>
      <TextView>Cars App</TextView>
    </TitleView>
  );
};

export default Title;
