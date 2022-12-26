import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

function InputLogin({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form>
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
        className="w-full border relative bg-gray-100 p-2 my-4"
      />
      <button
        type="button"
        onClick={() => login({ email, password })}
        className="w-full py-2 my-4 bg-green-600 hover:bg-green-500"
      >
        Login
      </button>
    </form>
  );
}

InputLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

export default InputLogin;
