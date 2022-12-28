/* eslint-disable react/button-has-type */
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import InputThread from "../components/InputComponents/InputThread";
import { asyncAddThread } from "../states/thread/action";

const AddThreadPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category = "" }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate("/");
  };

  return (
    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-40">
      <div className=" my-5 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-xl hover:text-yellow-500"
        >
          <FaArrowLeft />
        </button>
      </div>
      <h2 className="text-2xl font-bold">Create New Thread</h2>
      <InputThread addThread={onAddThread} />
    </div>
  );
};

export default AddThreadPage;
