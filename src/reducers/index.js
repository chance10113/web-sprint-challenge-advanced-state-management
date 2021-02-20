import {
  FETCH_SMURF_LOADING,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF,
  EDIT_ERROR,
} from "../actions/index";

export const initialState = {
  smurfArray: [{
    name:'Poppa Smurf',
    position:'Village Leader',
    nickname: 'Pops',
    description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
  },
  {
    id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
    name:'Smurfette',
    position:'Beautician',
    nickname: 'Smurfette',
    description: 'Smurfette\'s role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.'
  }],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfArray: action.payload,
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ADD_SMURF:
      return {
        ...state,
        smurfArray: [...state.smurfArray, { id: state.smurfArray.length, ...action.payload} ]
      };

    case EDIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;