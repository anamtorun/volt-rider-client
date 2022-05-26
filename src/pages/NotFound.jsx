import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pageNotFound from '../assets/images/notFound.svg';

export const NotFound = () => {
  return (
    <div className="hero bg-slate-50 min-h-[80vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={pageNotFound} alt="404" />

          <p className="text-3xl text-gray-800 mt-10">Page not found!</p>
          <p className="text-xl text-gray-600 mt-5">
            Page you are looking for either was removed or not available yet.
          </p>
          <Link to="/" className="btn btn-primary mt-10 normal-case">
            <FaHome className="mr-2 text-lg" /> Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
