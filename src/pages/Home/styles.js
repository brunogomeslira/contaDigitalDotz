import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F69C00',
  },
  containerToolbar: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonMenu: {
    paddingHorizontal: 10,
    height: 120,
    width: 120,
    borderRadius: 8,
    marginVertical: 30,
    marginHorizontal: 8,
    borderWidth: 0.5,
    borderColor: '#F3F3F3',
    backgroundColor: '#F69C00',
    justifyContent: 'space-evenly',
  },
  containerMenu: {
    justifyContent: 'flex-end',
  },
  titleButton: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  containerCard: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: 400,
    padding: 40,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
  },
  title: {
    color: '#223263',
    fontFamily: 'Muli-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#223263',
    opacity: 0.5,
    fontFamily: 'Muli-Regular',
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  buttonNao: {
    height: 60,
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
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    backgroundColor: '#005890',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
    elevation: 3,
  },
  containerModal: {
    padding: 20,
    borderRadius: 8,
    elevation: 4,
  },
  titleSuperior: {
    fontSize: 24,
    fontWeight: '700',
    color: '#223263',
    marginLeft: 10,
  },
  containerContent: {
    marginVertical: 15,
  },
  contentCard: {
    fontSize: 25,
    fontWeight: '700',
    color: 'orange',
  },
  contentTitleCard: {
    fontSize: 25,
    fontWeight: '500',
    color: 'orange',
  },
});
