import usersReducer from "./reducer";

describe("usersReducer function", () => {
  it("should return the initial state when given uknown action", () => {
    const initialState = [];
    const action = { type: "UKNOWN" };

    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it("should return the users when given RECEIVE_USERS action", () => {
    const initialState = [];
    const action = {
      type: "RECEIVE_USERS",
      payload: {
        users: [
          {
            id: "users-1",
            name: "Riko",
            email: "riko@gmail.com",
            avatar:
              "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1673404941/MjQtMjQ4MjUzX3VzZXItcHJvZmlsZS1kZWZhdWx0LWltYWdlLXBuZy1jbGlwYXJ0LXBuZy1kb3dubG9hZF9icDhrMjc=/grid_landscape",
          },
          {
            id: "users-2",
            name: "Naruto",
            email: "naruto@gmail.com",
            avatar:
              "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949516/bG1rbnRtdnhnNzd2ZWY2am9vNGQ=/grid_landscape",
          },
          {
            id: "users-3",
            name: "Luffy",
            email: "luffy@gmail.com",
            avatar:
              "https://res-console.cloudinary.com/djrkq9eey/thumbnails/v1/image/upload/v1666949414/bWQwZHBoeHBhajFpeG5sMW1idDc=/grid_landscape",
          },
        ],
      },
    };

    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(action.payload.users);
  });
});
