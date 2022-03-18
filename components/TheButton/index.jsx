import { Button } from "react-native";

const TheButton = ({ car, text, navigation, path }) => {
  return (
    <Button
      title={text}
      color="#ac8cdb"
      accessibilityLabel={'go to ' + path}
      onPress={() => navigation.navigate(path, { car })}
    />
  );
};

export default TheButton;
