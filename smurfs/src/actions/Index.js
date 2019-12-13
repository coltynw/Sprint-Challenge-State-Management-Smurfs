//dependancies 
import axios from 'axios';

//actions
export const SMURFS_LOAD_START = 'SMURFS_LOAD_START';
export const SMURFS_LOAD_SUCCESS = 'SMURFS_LOAD_SUCCESS';
export const SMURFS_LOAD_FAILURE = 'SMURFS_LOAD_FAILURE';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_ADD_FAILURE = 'SMURF_ADD_FAILURE';
export const SMURF_DEL_SUCCESS = 'SMURF_DEL_SUCCESS';

// get request
export const getSmurfs = () => dispatch => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({
          type: SMURFS_LOAD_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: SMURFS_LOAD_FAILURE,
          payload: 'error'
        });
      });
  };

    // post request
  export const addSmurf = (smurf) => dispatch => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        dispatch({
          type: SMURF_ADD_SUCCESS,
          payload: smurf
        });
      })
      .catch(err => {
        dispatch({
          type: SMURF_ADD_FAILURE,
          payload: 'error'
        })
      });
  }; 

  export const delSmurf = (smurf) => dispatch => {
    axios
      .delete('http://localhost:3333/smurfs/${props.match.params.id}', smurf)
      .then(res => {
        dispatch({
          type: SMURF_DEL_SUCCESS,
          payload: smurf
        });
      })
      .catch(err => {
        dispatch({
          type: SMURF_ADD_FAILURE,
          payload: 'error'
        })
      });
  }; 