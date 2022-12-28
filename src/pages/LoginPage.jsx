import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginInput from "../components/InputComponents/InputLogin";
import { asyncSetAuthUser } from "../states/authUser/action";
import login from "../assets/login.webp";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="w-full h-screen flex">
      <article className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={login} alt="/" />
        </div>
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h1 className="text-4xl font-bold text-blue-500">
              Enjoy<span className="text-green-500">Discussion</span>
            </h1>
            <LoginInput login={onLogin} />
            <p className="text-center">
              Don&apos;t have an account?
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </article>
    </section>
  );
};

export default LoginPage;
