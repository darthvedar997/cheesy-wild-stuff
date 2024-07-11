import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Comment from './Comment';

const CommentBox = () => {
  const [comments, setComments] = useState([
    { id: uuidv4(), content: 'First comment', replies: [] },
    { id: uuidv4(), content: 'Second comment', replies: [] },
    { id: uuidv4(), content: 'Third comment', replies: [] },
  ]);

  const addReply = (parentId, replyContent) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, { id: uuidv4(), content: replyContent }],
        };
      }
      return comment;
    });

    setComments(updatedComments);
  };

  const renderComments = (comments) => {
    return comments.map((comment) => (
      <div key={comment.id} className="max-w-xl mx-auto mb-4">
        <Comment comment={comment} onReply={(replyContent) => addReply(comment.id, replyContent)} />
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-4">
            {renderComments(comment.replies)}
          </div>
        )}
      </div>
    ));
  };

  const handleSubmitComment = (content) => {
    setComments([...comments, { id: uuidv4(), content, replies: [] }]);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 rounded-md max-h-96 overflow-y-auto bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {renderComments(comments)}
      <CommentForm onSubmit={handleSubmitComment} />
    </div>
  );
};

const CommentForm = ({ onSubmit }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(commentContent);
    setCommentContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        className="w-full border rounded-md p-2"
        placeholder="Write a comment..."
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600 transition-colors duration-300"
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentBox;
