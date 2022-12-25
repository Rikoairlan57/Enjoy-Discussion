export const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("id-ID", options);
};

export const createCategoryList = (threads) => {
  const list = new Set();

  threads.forEach((thread) => {
    list.add(thread.category);
  });

  return Array.from(list);
};

export const showHistoryPostDate = (date) => {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} days ago`;
  }
  if (diffHours > 0) {
    return `${diffHours} hours ago`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`;
  }
  if (diffSeconds > 0) {
    return `${diffSeconds} seconds ago`;
  }
  return "just now";
};
