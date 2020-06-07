export const url = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:1337";
  } else if (process.env.NODE_ENV === "production") {
    window.url = "https://biwapk.herokuapp.com";
    return "https://biwapk.herokuapp.com";
  }
};
