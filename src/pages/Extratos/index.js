import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View, FlatList} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Spinner from 'react-native-loading-spinner-overlay';

const CardItem = (props) => {
  const red = '#C60000';
  const green = '#2C860D';

  return (
    <View style={styles.containerItem}>
      <Text
        style={[
          styles.itemName,
          props.data.tipo === true ? {color: red} : {color: green},
        ]}>
        {props.data.nome}
      </Text>
      <Text
        style={[
          styles.itemData,
          props.data.tipo === true ? {color: red} : {color: green},
        ]}>
        {props.data.data}
      </Text>
      <Text
        style={[
          styles.itemValor,
          props.data.tipo === true ? {color: red} : {color: green},
        ]}>
        {props.data.valor}
      </Text>
    </View>
  );
};

function Extratos() {
  const [Loading, setLoading] = useState(true);
  const [extrato, setExtrato] = useState([]);
  const [dados, setDados] = useState([]);

  const [title, setTitle] = useState('Dotz');

  const state = useSelector((s) => s.auth);

  const nav = useNavigation();

  useEffect(() => {
    if (state.userToken) {
      setLoading(true);
      const subscriber = firestore()
        .collection('extrato')
        .doc(state.userToken)
        .onSnapshot((querySnapshot) => {
          let data = querySnapshot.data();
          setDados(data);
          setExtrato(data.dotz);
          setLoading(false);
        });

      return () => subscriber();
    }
  }, [state.userToken]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E48426" />

      <Spinner visible={Loading} textContent={''} color="#068" />

      <View style={styles.containerToolbar}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => nav.goBack()}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleSuperior}>Extratos {title}</Text>
      </View>

      <View style={styles.containerButton}>
        <Button
          title="Seus Dotz"
          buttonStyle={styles.buttonSim}
          onPress={() => {
            setExtrato(dados.dotz), setTitle('Dotz');
          }}></Button>
        <Button
          title="Seus R$"
          titleStyle={styles.titleNao}
          buttonStyle={styles.buttonNao}
          onPress={() => {
            setExtrato(dados.saldo), setTitle('R$');
          }}></Button>
      </View>

      <FlatList
        data={extrato}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <CardItem data={item} />}
      />
    </SafeAreaView>
  );
}

export default Extratos;
