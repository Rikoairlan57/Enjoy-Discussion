/* eslint-disable no-alert */
import { hideLoading, showLoading } from "react-redux-loading-bar";
import NetworkData from "../../utils/network-data";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  TOGGLE_UPVOTE_THREAD_DETAIL: "TOGGLE_UPVOTE_THREAD_DETAIL",
  TOGGLE_DOWNVOTE_THREAD_DETAIL: "TOGGLE_DOWNVOTE_THREAD_DETAIL",
  CREATE_COMMENT_THREAD: "CREATE_COMMENT_THREAD",
  TOGGLE_UPVOTE_COMMENT: "TOGGLE_UPVOTE_COMMENT",
  TOGGLE_DOWNVOTE_COMMENT: "TOGGLE_DOWNVOTE_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function createCommentThreadActionCreator(content) {
  return {
    type: ActionType.CREATE_COMMENT_THREAD,
    payload: {
      content,
    },
  };
}

function toggleUpVoteCommentActionCreator({ threadId, commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function toggleDownVoteCommentActionCreator({ idThread, idComment, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      idThread,
      idComment,
      userId,
    },
  };
}

function asyncCreateCommentThread({ threadId, content }) {
  return async (dispatch) => {
    try {
      const comment = await NetworkData.createComment({ threadId, content });
      dispatch(createCommentThreadActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threadDetail = await NetworkData.getThreadsDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));

    try {
      await NetworkData.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    }
  };
}

function asyncToggleDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));

    try {
      await NetworkData.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    }
  };
}

function asyncToggleUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleUpVoteCommentActionCreator({
        threadId,
        commentId,
        userId: authUser.id,
      })
    );

    try {
      await NetworkData.upVoteComment({ threadId, commentId });
    } catch (error) {
      dispatch(
        toggleUpVoteCommentActionCreator({
          threadId,
          commentId,
          userId: authUser.id,
        })
      );
      alert(error.message);
    }
  };
}

function asyncToggleDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleDownVoteCommentActionCreator({
        threadId,
        commentId,
        userId: authUser.id,
      })
    );

    try {
      await NetworkData.downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleDownVoteCommentActionCreator({
          threadId,
          commentId,
          userId: authUser.id,
        })
      );
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  createCommentThreadActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncCreateCommentThread,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
};
