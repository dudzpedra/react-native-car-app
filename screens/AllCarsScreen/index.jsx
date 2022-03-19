import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator, ImageBackground } from "react-native";
import styledComponents from "styled-components";
import Card from "../../components/Card";
import BlankList from "../../components/BlankList";
import Header from "../../components/Header";

const img = { uri: 'https://images.pexels.com/photos/1644794/pexels-photo-1644794.jpeg' }

const AllCarsView = styledComponents.View`
    height: 100%
    width: 100%
`;

const AllCarsTitle = styledComponents.Text`
    font-size: 24px
    width: 80%
    margin: 4% auto
    text-align: center
`;

const AllCarsScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://api-test.bhut.com.br:3000/api/cars");
    const result = await response.json();
    setCars(result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AllCarsView>
      <ImageBackground source={img} resizeMode='cover' style={{ opacity: 0.7}}>  
      <Header />
      {isLoading && <ActivityIndicator />}
      {cars.length > 0 ? (
        <ScrollView>
          <AllCarsTitle>
            Take a look at our complete list of available cars!
          </AllCarsTitle>
          {cars.map((car) => (
            <Card key={car._id} car={car} navigation={navigation} />
          ))}
        </ScrollView>
      ) : (
        <BlankList />
      )}
      </ImageBackground>
    </AllCarsView>
  );
};

export default AllCarsScreen;
