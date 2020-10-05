import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Button} from 'react-native-elements';
import CreditCard from 'react-native-credit-card';

function Cartoes() {
  const nav = useNavigation();
  const [title, setTitle] = useState('Físico');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E48426" />

      <View style={styles.containerToolbar}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => nav.goBack()}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleSuperior}>Cartões {title}</Text>
      </View>

      {title === 'Físico' ? (
        <View style={styles.containerCard}>
          <CreditCard
            shiny={false}
            bar={false}
            number={'4242 7981 0368 5334'}
            name={'Bruno gomes lira'}
            expiry={'0824'}
            cvc={'270'}
          />
        </View>
      ) : (
        <View style={styles.containerCard}>
          <CreditCard
            shiny={false}
            bar={false}
            number={'3667 4317 718 302'}
            name={'Bruno '}
            expiry={'0723'}
            cvc={'200'}
          />
        </View>
      )}

      <View style={styles.containerButton}>
        <Button
          title="Físico"
          buttonStyle={styles.buttonSim}
          onPress={() => {
            setTitle('Físico');
          }}></Button>
        <Button
          title="Virtual"
          titleStyle={styles.titleNao}
          buttonStyle={styles.buttonNao}
          onPress={() => {
            setTitle('Virtual');
          }}></Button>
      </View>
    </SafeAreaView>
  );
}

export default Cartoes;
