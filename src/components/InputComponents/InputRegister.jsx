import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

const InputRegister = ({ register }) => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
        className=" w-full border relative bg-gray-100 p-2 my-4"
      />
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className=" w-full border relative bg-gray-100 p-2 my-4"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className=" w-full border relative bg-gray-100 p-2 my-4"
      />
      <button
        className="w-full py-2 my-4 bg-green-600 hover:bg-green-500"
        type="button"
        onClick={() => register({ name, email, password })}
      >
        Register
      </button>
    </form>
  );
};

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;
