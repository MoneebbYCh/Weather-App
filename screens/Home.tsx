import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { styles } from '../styles';
import { WeatherData, fetchWeather } from '../WeatherService/fetchDta';
import { Title } from '../Components/Title';
import { CityInput } from '../Components/cityInput';
import { WeatherInfo } from '../WeatherService/weatherInfo';

export const HomeScreen = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleFetchWeather = async () => {
    const data = await fetchWeather(city);
    if (data) {
      setWeather(data);
    } else {
      Alert.alert('Error', 'City not found or failed to fetch weather data');
    }
  };

  return (
    <View style={styles.container}>
      <Title />
      <CityInput city={city} setCity={setCity} onSubmit={handleFetchWeather} />
      {weather && <WeatherInfo weather={weather} />}
    </View>
  );
};
