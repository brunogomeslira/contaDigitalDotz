import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F69C00',
  },
  titleSuperior: {
    fontSize: 20,
    fontWeight: '700',
    color: '#223263',
    marginLeft: 30,
  },
  containerToolbar: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerCard: {
    marginVertical: 30,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    width: '80%',
    height: 150,
    padding: 20,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
  },
  contentTitleCard: {
    fontSize: 25,
    marginTop: 5,
    marginLeft: 10,
    fontWeight: '500',
    color: '#585757',
  },
  containerContent: {
    flexDirection: 'row',
  },
});
