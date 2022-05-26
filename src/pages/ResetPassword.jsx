import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '../components';
import { splitFirebaseErrorMsg } from '../utils/splitFirebaseErrorMsg';
import auth from '../config/firebase';
import emailSchema from '../validation/emailSchema';

import customAlert from '../utils/CustomAlert';

export const ResetPassword = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
    customAlert('success', 'Password reset link sent to your email');

    reset();
  };

  return (
    <section className="bg-slate-200 min-h-[60vh] flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg rounded p-12 bg-slate-50 w-1/4">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-700 mb-2">Reset Your Password</h1>
        {!error ? (
          <p className="text-sm font-gray-600 font-semibold">
            Enter the email address you use to sign in.
          </p>
        ) : (
          <ErrorMessage text={splitFirebaseErrorMsg(error.message)} />
        )}

        <input
          type="text"
          className="input input-bordered w-full mt-8 mb-4"
          placeholder="email address"
          {...register('email')}
        />
        <p className="text-sm -mt-1 mb-2 text-error">{errors.email?.message}</p>
        <button
          disabled={sending}
          type="submit"
          className={`btn w-full btn-primary ${sending && 'loading'}`}
        >
          {!sending && 'Get reset link'}
        </button>

        <Link to="/login" className="link text-sm mt-3 block text-gray-600">
          Take me back to login
        </Link>
      </form>
    </section>
  );
};
