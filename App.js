import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Title from "./components/Title";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://api-test.bhut.com.br:3000/api/cars");
    const result = await response.json()
    setCars(result)
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <ScrollView>
      <Title />
      {cars.map(car => (
        <Card key={car._id} car={car} />
      ))}
    </ScrollView>
  );
}
