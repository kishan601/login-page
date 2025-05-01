const USER_KEY = 'user';

export const saveUser = (user, remember) => {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = () => {
  const storedUser = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
};

export const removeUser = () => {
  localStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(USER_KEY);
};
