import auth from '@react-native-firebase/auth';

export class AuthService {
  static login = async (email, senha) => {
    return auth().signInWithEmailAndPassword(email, senha);
  };

  static signOut = async () => {
    return auth().signOut();
  };
}
