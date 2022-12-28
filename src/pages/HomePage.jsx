/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThreadsList from "../components/Thread/ThreadsList";
import ThreadAddButton from "../components/Button/ThreadAddButton";
import CategoryList from "../components/Category/CategoryList";
import { setCategoryActionCreator } from "../states/category/action";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import {
  asyncToggleDownVoteThread,
  asyncToggleUpVoteThread,
} from "../states/thread/action";

const HomePage = () => {
  const {
    threads = [],
    users = [],
    category = "",
    authUser,
  } = useSelector((states) => states);
  const [status, setStatus] = useState("none");

  const dispatch = useDispatch();

  const filterAllCategory = (threads) => {
    const categories = new Set();

    threads.map((thread) => {
      categories.add(thread.category);
    });

    return [...categories];
  };

  function onCategoryHandler(newCategory) {
    dispatch(setCategoryActionCreator(newCategory));
  }

  const categoryList = filterAllCategory(threads);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    if (status === "none") {
      dispatch(asyncToggleUpVoteThread(id));
      setStatus("upVote");
      return;
    }

    if (status === "upVote") {
      dispatch(asyncToggleUpVoteThread(id));
      setStatus("none");
      return;
    }

    if (status === "downVote") {
      dispatch(asyncToggleUpVoteThread(id));
      dispatch(asyncToggleDownVoteThread(id));
      setStatus("upVote");
    }
  };

  const onDownVote = (id) => {
    if (status === "none") {
      dispatch(asyncToggleDownVoteThread(id));
      setStatus("downVote");
      return;
    }

    if (status === "downVote") {
      dispatch(asyncToggleDownVoteThread(id));
      setStatus("none");
      return;
    }

    if (status === "upVote") {
      dispatch(asyncToggleDownVoteThread(id));
      dispatch(asyncToggleUpVoteThread(id));
      setStatus("downVote");
    }
  };

  const filteredThreads = threads.filter(
    (thread) => thread.category === category || category === ""
  );

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="relative mx-5 sm:mx-10 md:mx-20 lg:mx-40">
      <div id="scrollX" className="my-5 overflow-x-scroll rounded-xl py-3">
        <CategoryList
          categories={categoryList}
          onCategoryHandler={onCategoryHandler}
        />
        <hr />
        <ThreadsList
          threads={threadList}
          upVote={onUpVote}
          downVote={onDownVote}
        />
        <ThreadAddButton />
      </div>
    </section>
  );
};

export default HomePage;
