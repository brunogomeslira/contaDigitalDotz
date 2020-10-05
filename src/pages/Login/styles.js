import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    fontFamily: 'Muli-Regular',
    fontSize: 25,
    color: 'white',
    fontWeight: '700',
    marginTop: 30,
  },
  errorStyle: {
    color: '#202949',
  },
  descricao: {
    textAlign: 'center',
    fontFamily: 'Muli-Bold',
    fontSize: 15,
    color: '#01061F',
    marginTop: 30,
    letterSpacing: 0.5,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F69C00',
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
  buttonStyle: {
    height: 55,
    elevation: 10,
    backgroundColor: '#202949',
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 8,
  },
  inputContainerStyle: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    height: 50,
    marginTop: 30,
    borderBottomWidth: 0,
  },
  containerImage: {
    marginTop: 100,
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 220,
    height: 150,
    resizeMode: 'stretch',
  },
});
