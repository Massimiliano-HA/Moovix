import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputText: {
    backgroundColor: 'grey',
    fontSize: 17,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 20,
    color: 'lightgray',
  },
  listContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  itemContainer: {
    marginLeft: 10,
    width: '33%',
    marginBottom: 10,
  },
});
