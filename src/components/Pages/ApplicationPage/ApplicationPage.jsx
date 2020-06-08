import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import axios from "axios";
import { StyledApplication, StyledOverlay, StyledStatus, StyledAddDate, StyledAttachments } from "./StyledApplicationPage";

export default function Application({ token, URL }) {
  let match = useRouteMatch("/applications/:id");
  const url = `${URL}${match.url}`;
  const [application, setApplication] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
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
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);
  return (
    <>
      {isLoaded ? (
        <StyledApplication>
          <h2>Zgłoszenie nr {application.id}</h2>
          <StyledAddDate>
            <small>Dodano:</small>
            {new Date(application.createdAt).toLocaleDateString()}
          </StyledAddDate>
          <StyledStatus status={application.status}>
            <small>Status:</small>
            <h4>{application.status}</h4>
          </StyledStatus>
          <StyledOverlay>
            <small>Nazwa jednostki:</small>
            {application.unit_main}
          </StyledOverlay>
          <StyledOverlay>
            <small>Chorągiew:</small>
            {application.choragiew.name}
          </StyledOverlay>
          <StyledOverlay>
            <small>Hufiec:</small>
            {application.hufiec.name}
          </StyledOverlay>
          {application.units_others ? (
            <StyledOverlay>
              <small>Inne jednostki:</small>
              {application.units_others}
            </StyledOverlay>
          ) : (
            ""
          )}
          <StyledOverlay>
            <small>Liczba uczestników:</small>
            {application.number_of_participants}
          </StyledOverlay>
          <StyledOverlay>
            <small>Data rozpoczęcia:</small>
            {new Date(application.start_date).toLocaleString()}
          </StyledOverlay>
          <StyledOverlay>
            <small>Data zakończenia:</small>
            {new Date(application.end_date).toLocaleString()}
          </StyledOverlay>
          <StyledOverlay>
            <small>Komendant:</small>
            {application.chief_name}
          </StyledOverlay>
          <StyledOverlay>
            <small>Numer telefonu:</small>
            <a href={`tel:${application.chief_phone}`}>{application.chief_phone}</a>
          </StyledOverlay>
          <StyledOverlay>
            <small>Email:</small>
            <a href={`mailto:${application.chief_email}`}>{application.chief_email}</a>
          </StyledOverlay>
          <StyledOverlay>
            <small>Kadra:</small>
            {application.staff}
          </StyledOverlay>
          <StyledAttachments>
            <small>Załączniki:</small>
            {application.work_plan.length > 0 ? (
              <ul>
                {application.work_plan.map((item) => (
                  <li key={item.id}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </StyledAttachments>
        </StyledApplication>
      ) : (
        <StyledApplication>Pobieranie danych...</StyledApplication>
      )}
    </>
  );
}
