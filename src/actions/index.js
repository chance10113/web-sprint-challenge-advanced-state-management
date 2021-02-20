import axios from "axios";
// Export Actions
export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const EDIT_ERROR = "EDIT_ERROR";

// Thunk Action Goes Here
export const getSmurf = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURF_LOADING });

    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_SMURF_FAILURE, payload: error });
        console.log(error);
      });
  };
};

export const fetchSmurfLoading = () => {
  return { type: FETCH_SMURF_LOADING };
};

export const fetchSmurfSuccess = (smurfArray) => {
  return { type: FETCH_SMURF_SUCCESS, payload: smurfArray };
};

export const fetchSmurfFailure = (error) => {
  return { type: FETCH_SMURF_FAILURE, payload: error };
};

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({type: FETCH_SMURF_LOADING});
  axios.post('http://localhost:3333/smurfs')
      .then(res=> {
          dispatch({type:ADD_SMURF, payload: newSmurf});
      })
      .catch(error=>{
          dispatch({type:FETCH_SMURF_FAILURE, payload:error});
      })
}
export const editError = (error) => {
  return { type: EDIT_ERROR, payload: error };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
