import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledApplicationList, StyledName, StyledStatus, StyledArrow } from "./StyledApplicationsList";
import Arrow from "../../assets/images/arrow.svg";

export default function ApplicationsList({ children, token, URL, limitNumber }) {
  const [applicationsList, setApplicationsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = `${URL}/applications`;
  const limit = limitNumber ? `&_limit=${limitNumber}` : "";
  const sort = `?_sort=createdAt:DESC${limit}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url + sort, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setApplicationsList(result.data);
        setTimeout(() => setIsLoaded(true), 200);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      fetchData();
    }
  }, [token]);

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
