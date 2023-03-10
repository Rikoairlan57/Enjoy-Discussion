import NetworkData from "../../utils/network-data";
import { message } from "antd";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  ADD_THREAD: "ADD_THREAD",
  TOGGLE_UPVOTE_THREAD: "TOGGLE_UPVOTE_THREAD",
  TOGGLE_DOWNVOTE_THREAD: "TOGGLE_DOWNVOTE_THREAD",
  TOGGLE_NEUTRALVOTE_THREAD: "TOGGLE_NEUTRALVOTE_THREAD",
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category = "" }) {
  return async (dispatch) => {
    try {
      const thread = await NetworkData.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      message.error(error.message);
    }
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id })
    );

    try {
      await NetworkData.upVoteThread(threadId);
    } catch (error) {
      message.error(error.message);
      dispatch(
        toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id })
    );

    try {
      await NetworkData.downVoteThread(threadId);
    } catch (error) {
      message.error(error.message);
      dispatch(
        toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
};
