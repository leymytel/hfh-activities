import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './ActivityPage.scss';
import ActivityList from "../../components/ActivityList";
import { TEST_DATA_ACTIVITIES } from "../../testData/Activities";
import { ActivityInterface } from "../../interfaces/ActivityInterface";
import ActivityDetails from "../../components/ActivityDetails";
import NavBar from "../../components/NavBar";
import { useAuth } from "../../hooks/useAuth";
import EnergyForm from "../../components/EnergyForm";

const ActivityPage: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityInterface | null>(null);
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) history.replace('/')
  }, [isAuthenticated, history]);
  return (
    <div className="activity-page">
      <NavBar />
      <EnergyForm />
      <div className={`activity-page-details-wrapper ${selectedActivity ? 'selected' : ''}`}>
        <ActivityList activities={TEST_DATA_ACTIVITIES} onActivitySelected={activity => setSelectedActivity(activity)}/>
        <ActivityDetails activity={selectedActivity} />
      </div>
    </div>
  );
}

export default ActivityPage;
