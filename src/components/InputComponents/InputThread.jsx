import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { FaPaperPlane } from "react-icons/fa";

const InputThread = ({ addThread }) => {
  const [title, onChangeTitle] = useInput("");
  const [category, onChangeCategory] = useInput("");
  const [body, setBody] = useState("");

  const onChangeBody = (event) => {
    setBody(event.target.innerText);
  };

  return (
    <form>
      <div className="my-4">
        <input
          className="w-full text-xl p-3 rounded-xl border-2"
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
      </div>
      <div className="my-4">
        <input
          className="w-full text-xl p-3 rounded-xl border-2"
          type="text"
          value={category}
          onChange={onChangeCategory}
          placeholder="Category (opsional)"
        />
      </div>
      <div className="my-4">
        <div
          className="w-full h-64 p-3 rounded-xl border-2"
          data-testid="input-body"
          contentEditable
          onInput={onChangeBody}
        />
      </div>
      <button
        type="submit"
        onClick={() => addThread({ title, body, category })}
        className="my-5 p-4 rounded-xl group text-white bg-green-500 hover:bg-green-600"
      >
        <span className="flex items-center text-white">
          Add Thread <FaPaperPlane className="ml-3" />
        </span>
      </button>
    </form>
  );
};

InputThread.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default InputThread;
