export default function contractsReducer(state = {
  loading: false,
  contracts: [],
}, action) {

  switch (action.type) {

    case 'ADD_NEW_CONTRACT':
    return {...state, contracts: [...state.contracts, action.payload]}

  default:
    return state;
  };
}
