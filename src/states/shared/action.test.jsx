// scenario test for asyncPopulateUsersAndThreads thunk

// - asyncPopulateUsersAndThreads thunk
// - should dispatch action correctly when data fetching success
// - should dispatch action and call alert correctly when data fetching failed

import api from "../../utils/network-data";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { receiveThreadsActionCreator } from "../thread/action";
import { receiveUsersActionCreator } from "../users/action";
import { asyncPopulateUsersAndThreads } from "./action";

const fakeThreadsResponse = [
  {
    id: "thread-1",
    title: "ini judul Thread Pertama",
    body: "Ini adalah content thread pertama",
    category: "General",
    createdAt: "2023-01-10T07:00:00.000Z",
    ownerId: "riko",
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsersResponse = [
  {
    id: "response-1",
    name: "naruto",
    email: "naruto@gmail.com",
    avatar:
      "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949516/bG1rbnRtdnhnNzd2ZWY2am9vNGQ=/grid_landscape",
  },
];

const fakeErrorResponse = new Error("Ups, something when wrong!!");

describe("asyncPopulateUsersAndThreads thunk", () => {
  beforeEach(() => {
    // backup original
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api.getAllUsers;
    delete api.getAllThreads;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
