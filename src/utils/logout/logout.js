export const logout = () => {
  localStorage.clear("token");
  window.location.pathname = "/";
};
