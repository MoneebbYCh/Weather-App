import React from 'react';
import { TextInput, Button, View } from 'react-native';
import { styles } from '../styles';

type CityInputProps = {
  city: string;
  setCity: (city: string) => void;
  onSubmit: () => void;
};

export const CityInput = ({ city, setCity, onSubmit }: CityInputProps) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        placeholderTextColor="#888"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={onSubmit} color="#1E90FF" />
    </View>
  );
};
