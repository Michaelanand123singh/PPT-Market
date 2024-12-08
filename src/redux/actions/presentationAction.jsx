export const FETCH_PRESENTATIONS_REQUEST = 'FETCH_PRESENTATIONS_REQUEST';
export const FETCH_PRESENTATIONS_SUCCESS = 'FETCH_PRESENTATIONS_SUCCESS';
export const FETCH_PRESENTATIONS_FAILURE = 'FETCH_PRESENTATIONS_FAILURE';

export const fetchPresentationsRequest = () => ({
  type: FETCH_PRESENTATIONS_REQUEST,
});

export const fetchPresentationsSuccess = (presentations) => ({
  type: FETCH_PRESENTATIONS_SUCCESS,
  payload: presentations,
});

export const fetchPresentationsFailure = (error) => ({
  type: FETCH_PRESENTATIONS_FAILURE,
  payload: error,
});
