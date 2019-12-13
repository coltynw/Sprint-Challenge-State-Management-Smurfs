//actions
import {
    SMURFS_LOAD_SUCCESS,
    SMURF_ADD_SUCCESS,
    // SMURF_DEL_SUCCESS
  } from '../actions/Index'

const initialState = [];

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case SMURFS_LOAD_SUCCESS:
        return [...state, ...action.payload];

      case SMURF_ADD_SUCCESS:
        return [...state, action.payload];

      // case SMURF_DEL_SUCCESS:
      //   return [ null ];
        

      default:
        return state;
    }
  }; 