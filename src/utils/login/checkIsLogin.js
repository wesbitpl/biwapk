export const checkIsLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};
