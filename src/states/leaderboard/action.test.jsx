// scenario test for leaderboard recuder function

// - leaderboardReducer function
// - should return the initial state when given uknown action
// - should return the leaderboards when given RECEIVE_LEADERBOARD action

import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/network-data";
import {
  asyncGetLeaderboards,
  receiveLeaderboardsActionCreator,
} from "./action";

const fakeLeaderboardsResponse = [
  {
    user: {
      id: "users-1",
      name: "Riko",
      email: "riko@gmail.com",
      avatar:
        "https://res-console.cloudinary.com/rikoairlan/thumbnails/v1/image/upload/v1673419847/Umlrb19qOTN2Zjg=/grid_landscape",
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncGetLeaderboards thunk", () => {
  beforeEach(() => {
    api._getLeadeboards = api.getLeaderboard;
  });

  afterEach(() => {
    api.getLeaderboard = api._getLeadeboards;

    delete api.getLeaderboard;
  });

  it("should dispatch action correctly when data leadeboards fetching success", async () => {
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboardsResponse);

    const dispatch = jest.fn();

    await asyncGetLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data leaderboards fetching failed", async () => {
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    window.alert = jest.fn();

    await asyncGetLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
