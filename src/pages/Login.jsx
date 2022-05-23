import { Link } from 'react-router-dom';
import { Divider, SocialLogin } from '../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
import loginSchema from '../validation/loginSchema';

const classes = 'text-base absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-slate-100 p-5">
      <div className="bg-base-100 shadow-xl w-full max-w-lg px-6 py-8 md:px-8 rounded">
        <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>
        <SocialLogin />

        <Divider text="or Log in with email" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              id="LoggingEmailAddress"
              className="input input-bordered w-full"
              {...register('email')}
            />
          </div>
          <p className="text-sm text-error mt-1">{errors.email?.message}</p>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <Link
                to="/forget-password"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                id="loggingPassword"
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

          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide btn font-normal normal-case text-base"
            >
              Login
            </button>
          </div>
        </form>

        <Divider link="/sign-up" text="or Sign up" />
      </div>
    </div>
  );
};
