import React, { useEffect } from 'react';
import NavBar from "../../components/NavBar";
import { config } from "../../config";
import { HatTokenValidation } from "@dataswift/hat-js/lib/utils/HatTokenValidation";
import { useHistory } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

const LandingPage: React.FC = () => {
  const history = useHistory();
  const { login } = useAuth();

  useEffect(() => {
    const maybeToken = window.localStorage.getItem(config.jwtTokenKey);

    if (!maybeToken || HatTokenValidation.isEncodedTokenExpired(maybeToken)) return;

    login(maybeToken, '');
    history.replace('/dashboard');
  }, [history, login]);
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default LandingPage;
