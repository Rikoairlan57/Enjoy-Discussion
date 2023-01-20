// test scenarion for threadDetail

// - threaddetailReducer function
// - should return the initial state when given uknown action
// - should return the threadDetail when given by RECEIVE_THREAD_DETAIL action
// - should return the null when given by CLEAR_THREAD_DETAIL action
// - should return the threadDetail with the toggle upvote thread when given by
//   TOGGLE_UPVOTE_THREAD_DETAIL action
// - should return the threadDetail with the toggle downvote thread when given by
//   TOGGLE_DOWNVOTE_THREAD_DETAIL action

import threadDetailReducer from "./reducer";

describe("threadDetailReducer function", () => {
  it("should return the initial state when given uknown action", () => {
    // arrange
    const initialState = null;
    const action = { type: "UKNOWN" };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the threadDetail when given by RECEIVE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = null;
    const action = {
      type: "RECEIVE_THREAD_DETAIL",
      payload: {
        threadDetail: [
          {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2023-01-10T07:00:00.000Z",
            owner: {
              id: "users-1",
              name: "Naruto",
              avatar:
                "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949516/bG1rbnRtdnhnNzd2ZWY2am9vNGQ=/grid_landscape",
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
              {
                id: "comment-1",
                content: "Ini adalah komentar pertama",
                createdAt: "2023-01-10T07:00:00.000Z",
                owner: {
                  id: "users-2",
                  name: "Luffy",
                  avatar:
                    "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949414/bWQwZHBoeHBhajFpeG5sMW1idDc=/grid_landscape",
                },
                upVotesBy: [],
                downVotesBy: [],
              },
            ],
          },
        ],
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it("should return the null when given by CLEAR_THREAD_DETAIL action", () => {
    // arrange
    const initialState = null;
    const action = {
      type: "CLEAR_THREAD_DETAIL",
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });

  it("should return the threadDetail with the toggle upvote thread when given by TOGGLE_UPVOTE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2023-01-10T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "Naruto",
        avatar:
          "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949516/bG1rbnRtdnhnNzd2ZWY2am9vNGQ=/grid_landscape",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2023-01-10T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "Naruto",
            avatar:
              "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949516/bG1rbnRtdnhnNzd2ZWY2am9vNGQ=/grid_landscape",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: "TOGGLE_UPVOTE_THREAD_DETAIL",
      payload: {
        userId: "users-1",
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.upVotesBy).toEqual([action.payload.userId]);
  });

  it("should return the threadDetail with the toggle downvote thread when given by TOGGLE_DOWNVOTE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2023-01-10T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "Naruto",
        avatar:
          "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949516/bG1rbnRtdnhnNzd2ZWY2am9vNGQ=/grid_landscape",
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          content: "Ini adalah komentar pertama",
          createdAt: "2023-01-10T07:00:00.000Z",
          owner: {
            id: "users-1",
            name: "Naruto",
            avatar:
              "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949516/bG1rbnRtdnhnNzd2ZWY2am9vNGQ=/grid_landscape",
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: "TOGGLE_DOWNVOTE_THREAD_DETAIL",
      payload: {
        userId: "users-1",
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.downVotesBy).toEqual([action.payload.userId]);
  });
});
