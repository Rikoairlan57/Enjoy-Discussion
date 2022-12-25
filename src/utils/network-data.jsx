const BASE_URL = "https://forum-api.dicoding.dev/v1";

export const getAccesToken = () => localStorage.getItem("accessToken");

export const putAccesToken = (token) =>
  localStorage.setItem("accessToken", token);

export const fetchWithToken = (url, options = {}) =>
  fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccesToken()}`,
    },
  });

export const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { token },
  } = responseJson;

  return token;
};

export const register = async ({ email, name, password }) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      password,
    }),
  });
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { user },
  } = responseJson;

  return user;
};

export const getAllUsers = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users`);
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { users },
  } = responseJson;

  return users;
};

export const getUserLogged = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { user },
  } = responseJson;

  return user;
};

export const createThread = async ({ title, body, category }) => {
  const response = await fetchWithToken(`${BASE_URL}/threads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      category,
    }),
  });
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { thread },
  } = responseJson;

  return thread;
};

export const getAllThreads = async () => {
  const response = await fetchWithToken(`${BASE_URL}/threads`);
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { threads },
  } = responseJson;

  return threads;
};

export const getDetailThreadById = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/threads/${id}`);
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { detailThread },
  } = responseJson;

  return detailThread;
};

export const createComment = async ({ threadId, content }) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    }
  );
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { comment },
  } = responseJson;

  return comment;
};

export const upVoteThread = async (threadId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/up-vote`,
    {
      method: "POST",
    }
  );
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

export const downVoteThread = async (threadId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/down-vote`,
    {
      method: "POST",
    }
  );
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

export const neutralVoteThread = async (threadId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/neutral-vote`,
    {
      method: "POST",
    }
  );
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

export const upVoteComment = async ({ threadId, commentId }) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
    {
      method: "POST",
    }
  );
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

export const downVoteComment = async ({ threadId, commentId }) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
    {
      method: "POST",
    }
  );
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

export const neutralVoteComment = async ({ threadId, commentId }) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
    {
      method: "POST",
    }
  );
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

export const getLeaderboards = async () => {
  const response = await fetchWithToken(`${BASE_URL}/leaderboards`);
  const responseJson = await response.json();
  const { status, message } = responseJson;

  if (status !== "success") throw new Error(message);

  const {
    data: { leaderboards },
  } = responseJson;

  return leaderboards;
};
