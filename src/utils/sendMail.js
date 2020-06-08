import axios from "axios";

const createBody = (to) => {
  const body = {
    from: "BiwApk <biwapk@wesb.it>",
    replyTo: "biwapk@wesb.it",
    to: to,
    subject: "Nowy Biwak | BiwApk",
    html: "<h1>Zgłoszono nowy biwak</h1><p>Przejdź do <a href='https://biwapk.wesb.it'>BiwApki</a> aby zobaczyć zgłoszenie.</p>",
  };
  return body;
};

export const sendEmail = async (url, to, token) => {
  const data = createBody(to);
  try {
    await axios.post(`${url}/email`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
