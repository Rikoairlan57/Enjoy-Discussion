import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "../components/InputComponents/InputRegister";
import { asyncRegisterUser } from "../states/users/action";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate("/");
  };

  return (
    <section>
      <article>
        <h2>Register</h2>
        <p className="login-page__quote">
          Place to share knowledge and better understand the world
        </p>
        <InputRegister register={onRegister} />
        <p>
          Already have an account?
          <Link to="/login" style={{ color: "yellow", textDecoration: "none" }}>
            {" "}
            Login
          </Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
