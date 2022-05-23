import { SocialLogin, Divider, ErrorMessage } from '../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import signUpSchema from '../validation/signUpSchema';
import auth from '../config/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import alert from '../utils/CustomAlert';
import { splitFirebaseErrorMsg } from '../utils/splitFirebaseErrorMsg';

const classes = 'text-base absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer';

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  useEffect(() => {
    if (user) {
      alert('success', 'Account created successfully');
      navigate(state?.path || '/');
    }
  }, [user, navigate, state]);

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-slate-100 p-5">
      <div className="bg-base-100 shadow-xl w-full max-w-lg px-6 py-8 md:px-8 rounded">
        {!error ? (
          <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome!</p>
        ) : (
          <ErrorMessage text={splitFirebaseErrorMsg(error.message)} />
        )}

        <SocialLogin />

        <Divider text="or sign up with email" />

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="input input-bordered w-full"
              {...register('name')}
            />
          </div>
          <p className="text-sm text-error mt-1">{errors.name?.message}</p>
          {/* Email */}
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              id="emailAddress"
              className="input input-bordered w-full"
              {...register('email')}
            />
          </div>
          <p className="text-sm text-error mt-1">{errors.email?.message}</p>

          {/* Password */}
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                id="password"
                className="input input-bordered w-full"
                {...register('password')}
              />
              {!showPassword ? (
                <AiOutlineEye className={classes} onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <AiOutlineEyeInvisible
                  className={classes}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <p className="text-sm text-error mt-1">{errors.password?.message}</p>

          {/* Confirm Password */}
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                id="confirmPassword"
                className="input input-bordered w-full"
                {...register('confirmPassword')}
              />

              {!showConfirmPassword ? (
                <AiOutlineEye
                  className={classes}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className={classes}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
            </div>
          </div>
          <p className="text-sm text-error mt-1">{errors.confirmPassword?.message}</p>

          <div className="mt-8">
            <button
              type="submit"
              className={`w-full px-4 py-2 tracking-wide btn font-normal normal-case text-base  ${
                loading && 'loading'
              }`}
              disabled={loading}
            >
              {!loading && 'Sign up'}
            </button>
          </div>
        </form>

        <Divider link="/login" text="or Login" />
      </div>
    </div>
  );
};
