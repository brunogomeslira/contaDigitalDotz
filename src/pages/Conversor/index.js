import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Input} from 'react-native-elements';

function Conversor() {
  const nav = useNavigation();
  const [dotz, setdotz] = useState('');
  const [moeda, setmoeda] = useState('');

  const conversor = (value, tipo) => {
    let resultado = '';
    console.tron.log(value, tipo);
    if (tipo) {
      setdotz(value);
      resultado = parseFloat(value) / 100;
      if (resultado) {
        setmoeda(resultado.toString());
      } else {
        setmoeda('0');
      }
    } else {
      setmoeda(value);
      resultado = parseFloat(value) * 100;
      if (resultado) {
        setdotz(resultado.toString());
      } else {
        setdotz('0');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E48426" />

      <View style={styles.containerToolbar}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => nav.goBack()}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleSuperior}>Conversor </Text>
      </View>

      <View style={styles.containerCard}>
        <View style={styles.card}>
          <View style={styles.containerIcon}>
            <Text style={styles.titleCard}>
              Digite uma valor para conversão
            </Text>
          </View>
          <View style={styles.containerContent}>
            <Text style={styles.contentTitleCard}>R$</Text>
            <Input
              keyboardType="numeric"
              value={moeda}
              onChangeText={(value) => conversor(value, false)}></Input>
          </View>
          <View style={styles.containerIcon}>
            <Icon name="compare-arrows" size={50} color="#585757" />
          </View>
          <View style={styles.containerContent}>
            <Text style={styles.contentTitleCard}>Dotz</Text>
            <Input
              keyboardType="numeric"
              value={dotz}
              onChangeText={(value) => conversor(value, true)}></Input>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Conversor;
