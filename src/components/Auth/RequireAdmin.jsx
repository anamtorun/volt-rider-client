import { useAuthState } from 'react-firebase-hooks/auth';
import { useCheckAdmin } from '../../hooks/useCheckAdmin';
import { signOut } from 'firebase/auth';
import { Spinner } from '../../components';
import { Navigate, Outlet } from 'react-router-dom';
import auth from '../../config/firebase';

export const RequireAdmin = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, checkingStatus] = useCheckAdmin(user);

  if (loading || checkingStatus) {
    return <Spinner />;
  }

  if (!admin || !user) {
    signOut(auth);
    localStorage.removeItem('fire_token');
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
