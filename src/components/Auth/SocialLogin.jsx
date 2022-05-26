import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { splitFirebaseErrorMsg } from '../../utils/splitFirebaseErrorMsg.js';
import auth from '../../config/firebase';
import useToken from '../../hooks/useToken.js';
import customAlert from '../../utils/CustomAlert.js';

export const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const { state } = useLocation();

  if (token) {
    navigate(state?.path || '/');
    return;
  }

  if (error) {
    const msg = splitFirebaseErrorMsg(error.message);
    if (!msg.includes('popup closed')) {
      customAlert('error', msg);
    }
  }

  return (
    <button
      onClick={() => signInWithGoogle()}
      className="w-full flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <div className="px-4 py-2">
        <FcGoogle className="w-6 h-6" />
      </div>

      <span className="w-5/6 px-4 py-3 font-bold text-center">
        {loading ? 'Signing in...' : 'Continue with Google'}
      </span>
    </button>
  );
};
