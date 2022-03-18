import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import Card from "../../components/Card";
import Title from "../../components/Title";
import styledComponents from "styled-components";

const HomeView = styledComponents.View`
    background-color: #46bfeb
    height: 100%
`;

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://api-test.bhut.com.br:3000/api/cars");
    const result = await response.json();
    setCars(result);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  //const renderCar = (car) => <Card key={car._id} car={car} navigation={navigation} />

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <HomeView>
          <Title />
          {/* <FlatList data={cars} renderItem={renderCar}/> */}
          {cars.map((car) => (
            <Card key={car._id} car={car} navigation={navigation} />
          ))}
        </HomeView>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
