import { useState } from 'react';
import { FaReply } from 'react-icons/fa';

const Comment = ({ comment, onReply }) => {
  const [replying, setReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const toggleReply = () => {
    setReplying(!replying);
    setReplyContent('');
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    onReply(replyContent);
    setReplyContent('');
    setReplying(false);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md mb-2 relative ">
      <p className="text-gray-800">{comment.content}</p>
      <div className="flex justify-between items-center mt-2">
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={toggleReply}
        >
          <FaReply className="mr-1" /> Reply
        </button>
      </div>

      {replying && (
        <form onSubmit={handleReplySubmit} className="mt-2">
          <textarea
            className="w-full border rounded-md p-2"
            placeholder="Write a reply..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600 transition-colors duration-300"
          >
            Post Reply
          </button>
        </form>
      )}
    </div>
  );
};

export default Comment;
