import React from "react";
import { useHistory } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  const history = useHistory();

  const homePage = () => {
    history.push("/");
  };
  return (
    <div className="f-404-page-not-found-page">
      <div className="f-404-container">
        <h1 className="f-404-code">404</h1>
        <button onClick={homePage} className="f-404-call-to-action">
          Go Back To Home
        </button>
        <h3 className="f-404-info">Page not found</h3>
      </div>
    </div>
  );
};

export default NoMatch;
