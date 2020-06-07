export const url = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:1337";
  } else {
    return "https://biwapk.herokuapp.com";
  }
};
