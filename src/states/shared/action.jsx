import { hideLoading, showLoading } from "react-redux-loading-bar";
import NetworkData from "../../utils/network-data";
import { receiveThreadsActionCreator } from "../thread/action";
import { receiveUsersActionCreator } from "../users/action";
import { message } from "antd";

const asyncPopulateUsersAndThreads = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await NetworkData.getAllUsers();
      const threads = await NetworkData.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      message.error(error.message);
    }

    dispatch(hideLoading());
  };
};

export { asyncPopulateUsersAndThreads };
