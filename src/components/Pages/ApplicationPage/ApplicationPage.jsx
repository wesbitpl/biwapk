import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import axios from "axios";
import { StyledApplication } from "./StyledApplicationPage";

export default function Application({ token, URL }) {
  let match = useRouteMatch("/applications/:id");
  const url = `${URL}${match.url}`;
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
        console.log(result.data);
        setTimeout(() => setIsLoaded(true), 200);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      fetchData();
    }
  }, [url]);
  return (
    <>
      {isLoaded ? (
        <StyledApplication>
          <h2>Zgłoszenie nr {application.id}</h2>

          <small>Status:</small>
          <h4>{application.status}</h4>

          <p>
            <small>Nazwa jednostki:</small>
            {application.unit_main}
          </p>
          <p>
            <small>Data rozpoczęcia:</small>
            {new Date(application.start_date).toLocaleString()}
          </p>
          <p>
            <small>Data zakończenia:</small>
            {new Date(application.end_date).toLocaleString()}
          </p>
          <small>Załączniki:</small>
          {application.work_plan.length > 0 ? (
            <ul>
              {application.work_plan.map((item) => (
                <li key={item.id}>
                  <a href={URL + item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <p>
            <small>Komendant:</small>
            {application.chief_name}
          </p>
          <p>
            <small>Numer telefonu:</small>
            <a href={`tel:${application.chief_phone}`}>{application.chief_phone}</a>
          </p>
          <p>
            <small>Email:</small>
            <a href={`mailto:${application.chief_email}`}>{application.chief_email}</a>
          </p>
        </StyledApplication>
      ) : (
        <StyledApplication>Pobieranie danych...</StyledApplication>
      )}
    </>
  );
}
