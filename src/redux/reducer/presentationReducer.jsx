import {
    FETCH_PRESENTATIONS_REQUEST,
    FETCH_PRESENTATIONS_SUCCESS,
    FETCH_PRESENTATIONS_FAILURE,
  } from '../actions/presentationAction';
  
  const initialState = {
    presentations: [],
    loading: false,
    error: null,
  };
  
  const presentationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRESENTATIONS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PRESENTATIONS_SUCCESS:
        return { ...state, loading: false, presentations: action.payload };
      case FETCH_PRESENTATIONS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default presentationReducer;
  