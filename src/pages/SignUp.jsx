import { SocialLogin, Divider } from '../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../validation/signUpSchema';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-slate-100 p-5">
      <div className="bg-base-100 shadow-xl w-full max-w-lg px-6 py-8 md:px-8 rounded">
        <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome!</p>
        <SocialLogin />

        <Divider text="or sign up with email" />

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              id="password"
              className="input input-bordered w-full"
              {...register('password')}
            />
          </div>
          <p className="text-sm text-error mt-1">{errors.password?.message}</p>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              className="input input-bordered w-full"
              {...register('confirmPassword')}
            />
          </div>
          <p className="text-sm text-error mt-1">{errors.confirmPassword?.message}</p>

          <div className="mt-8">
            <button className="w-full px-4 py-2 tracking-wide btn font-normal normal-case text-base">
              Sign up
            </button>
          </div>
        </form>

        <Divider link="/login" text="or Login" />
      </div>
    </div>
  );
};
