/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentList from "../components/Comment/CommentList";
import ThreadComment from "../components/Comment/ThreadComment";
import ThreadDetail from "../components/Thread/ThreadDetail";
import {
  asyncCreateCommentThread,
  asyncReceiveThreadDetail,
  asyncToggleDownVoteComment,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleUpVoteThreadDetail,
} from "../states/ThreadDetail/action";

const DetailThreadPage = () => {
  const { id } = useParams();
  const {
    threadDetail = null,
    users = [],
    authUser,
  } = useSelector((states) => states);
  const [status, setStatus] = useState("none");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVotes = () => {
    if (status === "none") {
      dispatch(asyncToggleUpVoteThreadDetail());
      setStatus("upVote");
      return;
    }

    if (status === "upVote") {
      dispatch(asyncToggleUpVoteThreadDetail());
      setStatus("none");
      return;
    }

    if (status === "downVote") {
      dispatch(asyncToggleUpVoteThreadDetail());
      dispatch(asyncToggleDownVoteThreadDetail());
      setStatus("upVote");
    }
  };

  const onDownVotes = () => {
    if (status === "none") {
      dispatch(asyncToggleDownVoteThreadDetail());
      setStatus("upVote");
      return;
    }

    if (status === "upVote") {
      dispatch(asyncToggleDownVoteThreadDetail());
      setStatus("none");
      return;
    }

    if (status === "downVote") {
      dispatch(asyncToggleDownVoteThreadDetail());
      dispatch(asyncToggleUpVoteThreadDetail());
      setStatus("upVote");
    }
  };

  const onAddComment = (content) => {
    dispatch(asyncCreateCommentThread({ threadId: id, content }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncToggleUpVoteComment({ threadId: id, commentId }));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncToggleDownVoteComment({ threadId: id, commentId }));
  };

  if (!threadDetail) {
    return null;
  }

  const allComment = threadDetail.comments.map((comment) => ({
    ...comment,
    user: users.find((user) => user.id === comment.id),
    authUser: authUser.id,
  }));

  return (
    <section>
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        upVoteThread={onUpVotes}
        downVoteThread={onDownVotes}
      />
      <ThreadComment addComment={onAddComment} />
      <CommentList
        comments={allComment}
        upVote={onUpVoteComment}
        downVote={onDownVoteComment}
      />
    </section>
  );
};

export default DetailThreadPage;
