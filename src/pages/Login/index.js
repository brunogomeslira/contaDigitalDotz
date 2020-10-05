import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Button, Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
const brasao = require('../../assets/dotzLogo.png');

import {AuthService} from '../../services/auth';

const loginValidateSchema = yup.object().shape({
  email: yup.string().email('E-mail Obrigatório').required('Obrigatório'),
  senha: yup.string().min(6, 'Deve conter 6 digitos').required('Obrigatório'),
});

function Login() {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [Loading, setLoading] = useState(false);

  const state = useSelector((s) => s.auth);

  const nav = useNavigation();
  const dispatch = useDispatch();
  const PasswordInput = useRef();

  const loginForm = useFormik({
    initialValues: {
      email: 'brunogomeslira2012@gmail.com',
      senha: '123456',
    },
    enableReinitialize: true,
    validationSchema: loginValidateSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  async function handleLogin({email, senha}) {
    try {
      setLoading(true);
      const response = await AuthService.login(email, senha);
      dispatch({type: 'SIGN_IN', userToken: response.user.uid});
    } catch (error) {
      if (error) {
        setTimeout(() => {
          Alert.alert(
            'Erro ao efetuar login',
            'Usuário e/ou senha inválidos.',
            [{text: 'OK'}],
            {cancelable: false},
          );
        }, 100);
      }
    }
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E48426" />
      <ScrollView>
        <Spinner visible={Loading} textContent={''} color="#068" />

        <View style={styles.containerImage}>
          <Image style={styles.image} source={brasao} />
        </View>

        <Text style={styles.title}>Conta Virtual Dotz</Text>
        <Text style={styles.descricao}>Faça Login para continuar</Text>

        <Input
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          errorStyle={styles.errorStyle}
          placeholder={'E-mail'}
          onChangeText={loginForm.handleChange('email')}
          value={loginForm.values.email}
          onBlur={loginForm.handleBlur('email')}
          rightIcon={<Icon name="person" size={24} color="#B5BBC9" />}
          errorMessage={loginForm.touched.email && loginForm.errors.email}
        />

        <Input
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          errorStyle={styles.errorStyle}
          placeholder={'Senha'}
          secureTextEntry={!PasswordVisible ? true : false}
          onChangeText={loginForm.handleChange('senha')}
          value={loginForm.values.senha}
          onBlur={loginForm.handleBlur('senha')}
          ref={PasswordInput}
          rightIcon={
            <Icon
              name={PasswordVisible ? 'visibility-off' : 'visibility'}
              onPress={() => {
                setPasswordVisible(!PasswordVisible);
                PasswordInput.current.focus();
              }}
              size={24}
              color="#B5BBC9"
            />
          }
          errorMessage={loginForm.touched.senha && loginForm.errors.senha}
        />

        <Button
          buttonStyle={styles.buttonStyle}
          title="Entrar"
          onPress={loginForm.handleSubmit}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
