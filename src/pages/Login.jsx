import { Divider, SocialLogin } from '../components';

export const Login = () => {
  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-slate-100">
      <div className="bg-base-100 shadow-xl w-full max-w-lg px-6 py-8 md:px-8 rounded">
        <p className="text-xl text-center text-gray-600 dark:text-gray-200">Sign up here!</p>
        <SocialLogin />

        <Divider text="or Sign up with email" />

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
          />
        </div>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="loggingPassword"
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Password"
            id="loggingPassword"
            className="input input-bordered w-full"
          />
        </div>

        <div className="mt-8">
          <button className="w-full px-4 py-2 tracking-wide btn font-normal normal-case text-base">
            Login
          </button>
        </div>

        <Divider link="/login" text="or Log in" />
      </div>
    </div>
  );
};
