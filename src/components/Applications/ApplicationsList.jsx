import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledApplicationList, StyledName, StyledStatus, StyledArrow } from "./StyledApplicationsList";
import Arrow from "../../assets/images/arrow.svg";

export default function ApplicationsList({ children, token, URL, limitNumber, startAt = 0, setIsAllResults }) {
  const [applicationsList, setApplicationsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = `${URL}/applications`;
  const limit = limitNumber ? `&_limit=${limitNumber}` : "";
  const start = `&_start=${startAt}`;
  const sort = `?_sort=createdAt:DESC${start}${limit}`;
  const fetchData = async () => {
    try {
      const result = await axios.get(url + sort, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.data == "") {
        setIsAllResults(true);
        console.log("brak nowych wyników");
        return;
      } else {
        setApplicationsList(applicationsList.concat(result.data));
      }
      setTimeout(() => setIsLoaded(true), 200);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [startAt]);
  return (
    <StyledApplicationList>
      <h2>{children}</h2>
      {isLoaded ? (
        <ul>
          {applicationsList.map((item) => (
            <li key={item.id}>
              <StyledName>{item.unit_main}</StyledName>
              <StyledStatus status={item.status}></StyledStatus>
              <StyledArrow to={`/applications/${item.id}`}>
                <img src={Arrow} alt="" />
              </StyledArrow>
            </li>
          ))}
        </ul>
      ) : (
        "Pobieranie danych..."
      )}
    </StyledApplicationList>
  );
}
