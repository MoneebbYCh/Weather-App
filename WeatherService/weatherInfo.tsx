import React from 'react';
import { View, Text } from 'react-native';
import { WeatherData } from './fetchDta';
import { styles } from '../styles';

type WeatherInfoProps = {
  weather: WeatherData;
};

export const WeatherInfo = ({ weather }: WeatherInfoProps) => {
  return (
    <View style={styles.weatherContainer}>
      <Text style={styles.weatherText}>
        {weather.name}, {weather.sys.country}
      </Text>
      <Text style={styles.weatherText}>
        Temperature: {weather.main.temp}°C
      </Text>
      <Text style={styles.weatherText}>
        Weather: {weather.weather[0].description}
      </Text>
    </View>
  );
};
