/* eslint-disable no-alert */
import { message } from "antd";
import NetworkData from "../../utils/network-data";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await NetworkData.register({ name, email, password });
    } catch (error) {
      message.error(error.message);
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
