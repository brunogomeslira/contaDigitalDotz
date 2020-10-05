import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View, Alert, ScrollView} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Button, Overlay} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {AuthService} from '../../services/auth';
import firestore from '@react-native-firebase/firestore';
import Spinner from 'react-native-loading-spinner-overlay';

function Home() {
  const nav = useNavigation();
  const dispatch = useDispatch();

  const [Loading, setLoading] = useState(true);
  const state = useSelector((s) => s.auth);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (state.userToken) {
      setLoading(true);
      const subscriber = firestore()
        .collection('users')
        .doc(state.userToken)
        .onSnapshot((querySnapshot) => {
          let data = querySnapshot.data();
          dispatch({
            type: 'UPDATE_USER',
            nome: data.nome,
            dotz: data.dotz,
            saldo: data.saldo,
          });
          setLoading(false);
        });

      return () => subscriber();
    }
  }, [state.userToken]);

  async function logout() {
    try {
      const response = AuthService.signOut();
      if (response) {
        dispatch({type: 'SIGN_OUT'});
      }
    } catch (error) {
      if (error) {
        setTimeout(() => {
          Alert.alert('Erro ao encerrar sessão', '...', [{text: 'OK'}], {
            cancelable: false,
          });
        }, 100);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E48426" />

      <Spinner visible={Loading} textContent={''} color="#068" />

      <Overlay
        overlayStyle={styles.containerModal}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <>
          <Text style={styles.title}>Atenção</Text>
          <Text style={styles.text}>Deseja realmente sair da Aplicação?</Text>
          <Button
            title="SIM"
            buttonStyle={styles.buttonSim}
            onPress={() => {
              toggleOverlay(), logout();
            }}></Button>
          <Button
            title="Não"
            titleStyle={styles.titleNao}
            buttonStyle={styles.buttonNao}
            onPress={() => toggleOverlay()}></Button>
        </>
      </Overlay>

      <View style={styles.containerToolbar}>
        <Text style={styles.titleSuperior}>Dotz | {state.nome}</Text>
        <TouchableOpacity onPress={() => toggleOverlay()}>
          <Icon name="exit-to-app" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerCard}>
        <View style={styles.card}>
          <View style={styles.containerContent}>
            <Text style={styles.contentTitleCard}>Seu Saldo</Text>
            <Text style={styles.contentCard}>{state.saldo}</Text>
          </View>
          <View style={styles.containerContent}>
            <Text style={styles.contentTitleCard}>Seus Dotz</Text>
            <Text style={styles.contentCard}>{state.dotz}</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerMenu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => nav.navigate('Extratos')}>
            <Icon name="receipt" size={30} color="white" />
            <Text style={styles.titleButton}>Extratos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => nav.navigate('Cartoes')}>
            <Icon name="credit-card" size={30} color="white" />
            <Text style={styles.titleButton}>Cartões</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => nav.navigate('Conversor')}>
            <Icon name="compare-arrows" size={30} color="white" />
            <Text style={styles.titleButton}>Conversor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMenu}
            onPress={() => nav.navigate('Boletos')}>
            <Icon name="payments" size={30} color="white" />
            <Text style={styles.titleButton}>Boletos</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
