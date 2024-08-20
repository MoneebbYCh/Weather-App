import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#1E90FF',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#ffffff',
    backgroundColor: '#333333',
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    padding: 20,
    borderRadius: 10,
  },
  weatherText: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 5,
  },
});
