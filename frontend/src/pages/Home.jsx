import React, { useState } from 'react';
import Card from '../components/Card';
import bgImage from '../assets/tiger.jpeg';
import { FaComment, FaHeart } from 'react-icons/fa';
import CommentBox from '../components/CommentBox';

const Home = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCommentClick = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCloseCommentForm = () => {
    setActiveCard(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl flex flex-wrap justify-center gap-6 p-6">
        {/* First Card */}
        <div className="relative flex flex-col sm:flex-row gap-4">
          <Card imgSrc={bgImage}>
            <h3 className="text-xl font-bold mb-2">Awesome Title 1</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center space-x-4">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                onClick={() => handleCommentClick(1)}
              >
                <FaComment className="text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
                <FaHeart className="text-gray-600" />
              </button>
            </div>
          </Card>
       
          {activeCard === 1 && (
            <div className="absolute top-0 left-0 w-full sm:static sm:left-auto sm:top-auto sm:bg-white sm:p-4 sm:rounded-md sm:shadow-md sm:w-auto">
              <CommentBox onCancel={handleCloseCommentForm} />
            </div>
          )}
        </div>

        {/* Second Card */}
        <div className="relative flex flex-col sm:flex-row gap-4 mt-6 sm:mt-0">
          <Card imgSrc={bgImage}>
            <h3 className="text-xl font-bold mb-2">Awesome Title 2</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center space-x-4">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                onClick={() => handleCommentClick(2)}
              >
                <FaComment className="text-gray-600" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
                <FaHeart className="text-gray-600" />
              </button>
            </div>
          </Card>
      
          {activeCard === 2 && (
            <div className="absolute top-0 left-0 w-full sm:static sm:left-auto sm:top-auto sm:bg-white sm:p-4 sm:rounded-md sm:shadow-md sm:w-auto">
              <CommentBox onCancel={handleCloseCommentForm} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
