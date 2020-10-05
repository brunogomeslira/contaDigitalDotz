const initialState = {
  nome: '...',
  dotz: '00',
  saldo: 'R$ 00.00',
  userToken: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        userToken: action.userToken,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        nome: action.nome,
        dotz: action.dotz,
        saldo: action.saldo,
      };
    case 'SIGN_OUT':
      return {
        initialState,
      };
    default:
      return state;
  }
};
export default auth;
