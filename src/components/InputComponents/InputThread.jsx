import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

const InputThread = ({ addThread }) => {
  const [title, onChangeTitle] = useInput("");
  const [category, onChangeCategory] = useInput("");
  const [body, setBody] = useState("");

  const onChangeBody = (event) => {
    setBody(event.target.innerText);
  };

  return (
    <form>
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="Title"
      />
      <input
        type="text"
        value={category}
        onChange={onChangeCategory}
        placeholder="Category (opsional)"
      />
      <div data-testid="input-body" contentEditable onInput={onChangeBody} />
      <button
        type="submit"
        onClick={() => addThread({ title, body, category })}
      >
        Add Thread
      </button>
    </form>
  );
};

InputThread.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default InputThread;
