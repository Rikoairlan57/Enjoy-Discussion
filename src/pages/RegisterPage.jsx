import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "../components/InputComponents/InputRegister";
import { asyncRegisterUser } from "../states/users/action";
import login from "../assets/login.webp";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate("/");
  };

  return (
    <section className="w-full h-screen flex">
      <article className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={login} alt="/" />
        </div>
        <div className="flex justify-center items-center h-full">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <h2 className="text-center text-4xl font-bold py-4 text-yellow-600">
              Enjoy<span className="text-yellow-500"> Discussion</span>
            </h2>
            <InputRegister register={onRegister} />
            <p className="text-center">
              Already have an account?
              <Link
                to="/login"
                style={{ color: "red", textDecoration: "none" }}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </article>
    </section>
  );
};

export default RegisterPage;
