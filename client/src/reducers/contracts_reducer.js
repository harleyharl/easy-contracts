const initialState = {
  contracts: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'CREATE_NEW_CONTRACT':
        return {...state,
                contracts: action.payload.contract,
              }
      default:
        return state;
    }
  }
