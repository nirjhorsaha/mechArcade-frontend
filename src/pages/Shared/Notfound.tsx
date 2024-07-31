import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <FaExclamationTriangle className="text-6xl text-red-600 mb-4" />
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="mt-6 inline-flex items-center px-6 py-3 text-lg font-medium text-blue-500 transition duration-300"
      >
        <FaHome className="mr-2 text-xl" />
        Back to Home Page
      </Link>
    </div>
  );
};

export default Notfound;
