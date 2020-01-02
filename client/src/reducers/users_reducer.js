const initialState = {
  currentUser: {},
  authed: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload, authed: true}
      case 'LOGOUT_USER':
        return {...state, currentUser: {} }

      default:
        return state;
    }
  }
