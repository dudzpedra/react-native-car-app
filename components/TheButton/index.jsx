import { Button, Alert } from "react-native";

const TheButton = ({ car, text, navigation }) => {
  return (
    <Button
      title={text}
      color="#ac8cdb"
      accessibilityLabel="Ver detalhes"
      onPress={() => navigation.navigate("Details", { car })}
    />
  );
};

export default TheButton;
