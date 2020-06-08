import React from "react";
import { StyledApplicationsPage } from "./ApplicationsPage.styled";
import ApplicationsList from "../../Applications/ApplicationsList";

function ApplicationsPage({ token, URL }) {
  return (
    <StyledApplicationsPage>
      <ApplicationsList token={token} URL={URL}>
        Zgłoszenia
      </ApplicationsList>
    </StyledApplicationsPage>
  );
}

export default ApplicationsPage;
