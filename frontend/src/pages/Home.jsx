import Card from '../components/Card';
import bgImage from '../assets/tiger.jpeg'; // Replace with your image path
import { FaBookmark, FaHeart, FaShare } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl flex flex-wrap justify-center gap-6 p-6">
        <Card imgSrc={bgImage}>
          <h3 className="text-xl font-bold mb-2">Awesome Title</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaHeart className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaBookmark className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaShare className="text-gray-600" />
            </button>
          </div>
        </Card>
        <Card imgSrc={bgImage}>
          <h3 className="text-xl font-bold mb-2">Awesome Title</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaHeart className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaBookmark className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaShare className="text-gray-600" />
            </button>
          </div>
        </Card>
        <Card imgSrc={bgImage}>
          <h3 className="text-xl font-bold mb-2">Awesome Title</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaHeart className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaBookmark className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaShare className="text-gray-600" />
            </button>
          </div>
        </Card>
        <Card imgSrc={bgImage}>
          <h3 className="text-xl font-bold mb-2">Awesome Title</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaHeart className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaBookmark className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaShare className="text-gray-600" />
            </button>
          </div>
        </Card>
        <Card imgSrc={bgImage}>
          <h3 className="text-xl font-bold mb-2">Awesome Title</h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaHeart className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaBookmark className="text-gray-600" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <FaShare className="text-gray-600" />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
