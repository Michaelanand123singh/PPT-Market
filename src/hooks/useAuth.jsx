import { useSelector, useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure, logout } from '../redux/actions/authActions';
import { login, logout as logoutService, getCurrentUser } from '../services/authService';

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const loginUser = async (email, password) => {
    dispatch(loginRequest());
    try {
      const user = await login(email, password);
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };

  const logoutUser = () => {
    logoutService();
    dispatch(logout());
  };

  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };

  return {
    ...authState,
    loginUser,
    logoutUser,
    fetchCurrentUser,
  };
};

export default useAuth;
