/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */
import { hideLoading, showLoading } from "react-redux-loading-bar";
import NetworkData from "../../utils/network-data";
import { receiveThreadsActionCreator } from "../thread/action";
import { receiveUsersActionCreator } from "../users/action";

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await NetworkData.getAllUsers();
      const threads = await NetworkData.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };
