import { FaExclamationTriangle } from 'react-icons/fa';

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <FaExclamationTriangle className="text-6xl text-red-600 mb-4" />
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
    </div>
  );
};

export default Notfound;
