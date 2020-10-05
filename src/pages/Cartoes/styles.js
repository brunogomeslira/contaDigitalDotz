import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  buttonNao: {
    height: 60,
    width: 100,
    borderWidth: 1,
    borderColor: '#005890',
    backgroundColor: '#FFFFFF',
    color: '#005890',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
  },
  titleNao: {
    color: '#005890',
  },
  buttonSim: {
    height: 60,
    width: 100,
    backgroundColor: '#005890',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
    elevation: 3,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 90,
  },
  containerCard: {
    width: '100%',
    height: 200,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: 200,
    padding: 40,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
  },
});
