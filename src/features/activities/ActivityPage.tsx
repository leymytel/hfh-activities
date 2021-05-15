import React, { useState } from 'react';
import './ActivityPage.scss';
import ActivityList from "../../components/ActivityList";
import { TEST_DATA_ACTIVITIES } from "../../testData/Activities";
import { ActivityInterface } from "../../interfaces/ActivityInterface";
import ActivityDetails from "../../components/ActivityDetails";

const ActivityPage: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityInterface | null>(null);

  return (
    <div className="activity-page">
      <div className={`activity-page-details-wrapper ${selectedActivity ? 'selected' : ''}`}>
        <ActivityList activities={TEST_DATA_ACTIVITIES} onActivitySelected={activity => setSelectedActivity(activity)}/>
        <ActivityDetails activity={selectedActivity} />
      </div>
    </div>
  );
}

export default ActivityPage;
