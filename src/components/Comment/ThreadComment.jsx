import React, { useState } from "react";
import PropTypes from "prop-types";

function ThreadComment({ addComment }) {
  const [content, setContent] = useState("");

  const onAddComment = () => {
    addComment(content);
    setContent("");
  };

  const handleAddComment = (event) => {
    setContent(event.target.innerText);
  };

  return (
    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-40">
      <h3>New comment :</h3>
      <form>
        <div
          data-testid="input-content"
          data-placeholder="Create new comment..."
          className="w-full h-64 p-3 rounded-xl border-2 mb-3"
          contentEditable
          data-value={content}
          onInput={handleAddComment}
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-3 py-2 mb-4 rounded-xl hover:bg-yellow-600"
          onClick={onAddComment}
        >
          Comment
        </button>
      </form>
    </div>
  );
}

ThreadComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default ThreadComment;
