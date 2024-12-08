import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPresentationsRequest,
  fetchPresentationsSuccess,
  fetchPresentationsFailure,
} from '../redux/actions/presentationActions';
import { fetchPresentations, fetchPresentationById } from '../services/presentationService';

const usePresentations = () => {
  const dispatch = useDispatch();
  const presentationState = useSelector((state) => state.presentations);

  const loadPresentations = async () => {
    dispatch(fetchPresentationsRequest());
    try {
      const presentations = await fetchPresentations();
      dispatch(fetchPresentationsSuccess(presentations));
    } catch (error) {
      dispatch(fetchPresentationsFailure(error));
    }
  };

  const loadPresentationById = async (id) => {
    try {
      return await fetchPresentationById(id);
    } catch (error) {
      throw error;
    }
  };

  return {
    ...presentationState,
    loadPresentations,
    loadPresentationById,
  };
};

export default usePresentations;
