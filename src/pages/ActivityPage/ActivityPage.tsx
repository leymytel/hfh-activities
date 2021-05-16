import React, { useEffect, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './ActivityPage.scss';
import ActivityList from '../../components/ActivityList';
import { ActivityInterface } from '../../interfaces/ActivityInterface';
import ActivityDetails from '../../components/ActivityDetails';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../hooks/useAuth';
import EnergyForm from '../../components/EnergyForm';
import { defaultState, reducer, actionTypes } from '../../state/activities';
import { FilterType } from '../../interfaces/Filter';

const ActivityPage: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityInterface | null>(null);
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) history.replace('/');
  }, [isAuthenticated, history]);

  const updateFilter = (data: FilterType) =>
    dispatch({ type: actionTypes.updateFilter, data });

  return (
    <div className="activity-page">
      <NavBar />
      <EnergyForm updateFilter={updateFilter} />
      <div
        className={`activity-page-details-wrapper ${
          selectedActivity ? 'selected' : ''
        }`}
      >
        <ActivityList
          activities={state.activities}
          onActivitySelected={(activity) => setSelectedActivity(activity)}
        />
        <ActivityDetails activity={selectedActivity} />
      </div>
    </div>
  );
};

export default ActivityPage;
