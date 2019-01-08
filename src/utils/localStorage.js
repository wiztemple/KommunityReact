export const getItem = (item) => {
  return localStorage.getItem(item);
};

export const clearStorage = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('id');
  localStorage.removeItem('token');
  localStorage.removeItem('username');
};

export const getUserCredentials = (userDetails) => {
  Object.keys(userDetails).forEach((item) => {
    localStorage.setItem(item, userDetails[item]);
  });
};

/**
 * A function to check logged in state
 * @returns {boolean} login state
 */
export const isLoggedIn = () => {
  let loginState;
  const token = getItem('token');
  if (token) {
    loginState = true;
  } else {
    loginState = false;
  }
  return loginState;
};
