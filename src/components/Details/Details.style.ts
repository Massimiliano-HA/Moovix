import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'lightgray',
    maxWidth: 250,
  },
  poster: {
    width: 300,
    height: 400,
    marginRight: 10,
    marginBottom: 10,
  },
  overview: {
    marginTop: 20,
    color: 'lightgray',
    maxWidth: 350,
    fontSize: 15,
  },
  note: {
    marginTop: 20,
    marginBottom: 50,
    color: 'lightgray',
    maxWidth: 350,
    fontSize: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
