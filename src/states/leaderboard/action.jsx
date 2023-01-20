import { hideLoading, showLoading } from "react-redux-loading-bar";
import NetworkData from "../../utils/network-data";

const ActionType = {
  RECEIVE_LEADERBOARDS: "RECEIVE_LEADERBOARDS",
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncGetLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const leaderboards = await NetworkData.getLeaderboard();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, receiveLeaderboardsActionCreator, asyncGetLeaderboards };
