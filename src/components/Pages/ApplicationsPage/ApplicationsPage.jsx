import React, { useState } from "react";
import { StyledApplicationsPage, StyledButton } from "./ApplicationsPage.styled";
import ApplicationsList from "../../Applications/ApplicationsList";

function ApplicationsPage({ token, URL }) {
  const limit = 10;
  const [startAt, setStartAt] = useState(0);
  const [isAllResults, setIsAllResults] = useState(false);
  return (
    <StyledApplicationsPage>
      <ApplicationsList token={token} URL={URL} limitNumber={limit} startAt={startAt} setIsAllResults={setIsAllResults}>
        Zgłoszenia
      </ApplicationsList>
      <StyledButton onClick={() => setStartAt(startAt + limit)} disabled={isAllResults}>
        {isAllResults ? "Nie ma więcej zgłoszeń :(" : "Załaduj więcej"}
      </StyledButton>
    </StyledApplicationsPage>
  );
}

export default ApplicationsPage;
