export const url = () => {
  if (process.env.NODE_ENV === "development") {
    return `http://${window.location.hostname}:1337`;
  } else if (process.env.NODE_ENV === "production") {
    return "https://biwapk.herokuapp.com";
  }
};
