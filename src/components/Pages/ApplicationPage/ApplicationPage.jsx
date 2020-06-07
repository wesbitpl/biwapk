import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import axios from "axios";
import { StyledApplication } from "./StyledApplicationPage";

export default function Application({ token }) {
  let match = useRouteMatch("/applications/:id");
  const url = match.url;
  const [application, setApplication] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setApplication(result.data);
        setTimeout(() => setIsLoaded(true), 200);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return (
    <>
      {isLoaded ? (
        <StyledApplication>
          <h2>Zgłoszenie nr {application.id}</h2>
          <p>
            <small>Nazwa jednostki:</small>
          </p>
          <p>{application.unit_main}</p>
          <p>
            <small>Data rozpoczęcia:</small>
          </p>
          <p>{new Date(application.start_date).toLocaleString()}</p>
          <p>
            <small>Data zakończenia:</small>
          </p>
          <p>{new Date(application.end_date).toLocaleString()}</p>
        </StyledApplication>
      ) : (
        <StyledApplication>Pobieranie danych...</StyledApplication>
      )}
    </>
  );
}
