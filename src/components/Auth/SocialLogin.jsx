import { FcGoogle } from 'react-icons/fc';

export const SocialLogin = () => {
  return (
    <button className="w-full flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <div className="px-4 py-2">
        <FcGoogle className="w-6 h-6" />
      </div>

      <span className="w-5/6 px-4 py-3 font-bold text-center">Continue with Google</span>
    </button>
  );
};
