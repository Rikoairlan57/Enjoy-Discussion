import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginInput from "../components/InputComponents/InputLogin";
import { asyncSetAuthUser } from "../states/authUser/action";

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section>
      <article>
        <h2>Login</h2>
        <p>Place to share knowledge and better understand the world.</p>
        <LoginInput login={onLogin} />
        <p className="login-page__text">
          Don&apos;t have an account?
          <Link
            to="/register"
            style={{ color: "yellow", textDecoration: "none" }}
          >
            {" "}
            Register
          </Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
