import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Spinner } from '../../components';

import auth from '../../config/firebase';
import alert from '../../utils/CustomAlert';

export const PrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (error) {
    alert('error', 'Could not validate user, please login again.');
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }
  return <Outlet />;
};
