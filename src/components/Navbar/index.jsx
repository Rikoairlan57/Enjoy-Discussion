/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ authUser, signOut }) {
  const { id, name, avatar } = authUser;

  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl font-bold text-yellow-600">
              Enjoy<span className="text-yellow-500">Discussion</span>
            </h2>
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293
                      4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link
                    to="/"
                    className="py-4 px-4 font-semibold hover:bg-yellow-600 hover:text-white rounded-md"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link
                    to="/leaderboard"
                    className="py-4 px-4 font-semibold hover:bg-yellow-600 hover:text-white rounded-md"
                  >
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <img
                    src={avatar}
                    alt={id}
                    title={name}
                    className="w-12 h-12 rounded-full bg-blue-100"
                  />
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <button
                    type="button"
                    onClick={signOut}
                    className="py-4 px-4 font-semibold hover:bg-yellow-600 hover:text-white rounded-md"
                  >
                    Logout
                  </button>
                </li>
              </>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

NavBar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default NavBar;
