import axios from "axios";
export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const EDIT_ERROR = "EDIT_ERROR";

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_LOADING });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: error });
        console.log("getSmurf Error", error);
      });
  };
};

export const fetchSmurfsLoading = () => {
  return { type: FETCH_SMURFS_LOADING };
};

export const fetchSmurfsSuccess = (smurfs) => {
  return { type: FETCH_SMURFS_SUCCESS, payload: smurfs };
};

export const fetchSmurfsFailure = (error) => {
  return { type: FETCH_SMURFS_FAILURE, payload: error };
};

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_LOADING });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => {
        dispatch({ type: ADD_SMURF, payload: newSmurf });
      })
      .catch((error) => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: error });
        console.log("addSmurf Failure", error);
      });
  };
};

export const editError = (error) => {
  return { type: EDIT_ERROR, payload: error };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
