import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native-elements';

function Boletos() {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E48426" />

      <View style={styles.containerToolbar}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => nav.goBack()}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleSuperior}>Boletos </Text>
      </View>

      <View style={styles.containerCard}>
        <View style={styles.card}>
          <View style={styles.containerContent}>
            <Icon name="payments" size={50} color="#585757" />
            <Text style={styles.contentTitleCard}>Pague seu Boleto!</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Boletos;
