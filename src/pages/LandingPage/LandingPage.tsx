import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HatTokenValidation } from "@dataswift/hat-js/lib/utils/HatTokenValidation";

import './LandingPage.scss';

import NavBar from "../../components/NavBar";
import { config } from "../../config";
import { useAuth } from "../../hooks/useAuth";
import backgroundImage from '../../assets/background.jpg';

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
      <img src={backgroundImage} className="landing-page-background-image" />
    </div>
  )
}

export default LandingPage;
