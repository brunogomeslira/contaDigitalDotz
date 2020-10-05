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
    width: '100%',
    alignItems: 'center',
  },
  card: {
    marginVertical: 40,
    width: '80%',
    padding: 20,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
  },
  contentTitleCard: {
    fontSize: 25,
    fontWeight: '500',
    color: 'orange',
  },
  containerIcon: {
    marginVertical: 20,
    alignItems: 'center',
  },
  titleCard: {
    fontSize: 20,
    fontWeight: '700',
    color: '#223263',
  },
});
