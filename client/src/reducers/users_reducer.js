const initialState = {
  username:'',
  avatar:'',
  bio:'',
  authed: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_USER':
      debugger
        return {...state,
                username: action.payload.username,
                avatar: action.payload.avatar,
                bio: action.payload.bio,
                authed: true,
              }
      case 'LOGOUT_USER':
        return {...state, currentUser: {} }
      default:
        return state;
    }
  }
