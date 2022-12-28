import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ThreadInput from "../components/InputComponents/InputThread";
import { asyncAddThread } from "../states/thread/action";

const AddThreadPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category = "" }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate("/");
  };

  return (
    <div>
      <h2>Create New Thread</h2>
      <ThreadInput addThread={onAddThread} />
    </div>
  );
};

export default AddThreadPage;
