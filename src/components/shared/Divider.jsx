import { Link } from 'react-router-dom';

export const Divider = ({ link, text }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      {link ? (
        <Link
          to={link}
          className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          {text}
        </Link>
      ) : (
        <p className="text-xs text-gray-500 uppercase dark:text-gray-400">{text}</p>
      )}
      <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    </div>
  );
};
