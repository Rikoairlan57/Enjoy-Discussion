// test scenario for threadReducer

// -thread reducer function
// - should return the initial state when given uknown action
// - should return the threads when given by RECEIVE_THREADS action
// - should return the threads with the new thread when given by ADD_THREAD action
// - should return the threads with the toggle upvote thread when given by
//   TOGGLE_UPVOTE_THREAD action
// - should return the threads with the toggle downvote thread when given by
//   TOGGLE_DOWNVOTE_THREAD action

import threadReducer from "./reducer";

describe("threadReducers function", () => {
  it("should return the initial state when given uknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UKNOWN" };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the threads when given by RECEIVE_THREADS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_THREADS",
      payload: {
        threads: [
          {
            id: "thread-1",
            title: "Ini Adalah Judul Thread Pertama",
            body: "Ini adalah bagian body thread pertama",
            category: "Testing",
            createdAt: "2023-01-10T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it("should return the threads with the new thread when given by ADD_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Ini Adalah Judul Thread Pertama",
        body: "Ini adalah bagian body thread pertama",
        category: "Testing",
        createdAt: "2023-01-10T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "ADD_THREAD",
      payload: {
        thread: [
          {
            id: "thread-2",
            title: "Ini Adalah Judul Thread Kedua",
            body: "Ini adalah body thread kedua",
            category: "Testing",
            createdAt: "2023-01-10T07:00:00.000Z",
            ownerId: "users-2",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it("should return the threads with the toggle upvote thread when given by TOGGLE_UPVOTE_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "Testing",
        createdAt: "2023-01-10T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "TOGGLE_UPVOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // action : upVote
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);

    // action : unUpVote
    const nextState2 = threadReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it("should return the threads with the toggle downvote thread when given by TOGGLE_DOWNVOTE_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "Testing",
        createdAt: "2023-01-10T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: "TOGGLE_DOWNVOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    // action : downVote
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);

    // action : unDownVote
    const nextState2 = threadReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });
});
