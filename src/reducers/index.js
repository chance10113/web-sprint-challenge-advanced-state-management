import {
  FETCH_SMURF_LOADING,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF,
  EDIT_ERROR,
} from "../actions/index";

export const initialState = {
  smurfArray: [],
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
        smurfArray: action.payload,
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