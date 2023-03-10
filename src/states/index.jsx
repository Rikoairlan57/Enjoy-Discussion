import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import threadReducer from "./thread/reducer";
import categoryReducer from "./category/reducer";
import threadDetailReducer from "./ThreadDetail/reducer";
import leaderboardsReducer from "./leaderboard/reducer";

import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    threads: threadReducer,
    loadingBar: loadingBarReducer,
    isPreload: isPreloadReducer,
    category: categoryReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
  },
});

export default store;
