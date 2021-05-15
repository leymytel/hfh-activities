import React from 'react';
import { ActivityInterface } from "../interfaces/ActivityInterface";
import ActivityListItem from "./ActivityListItem";

interface ActivityListProps {
  activities: ActivityInterface[];
  onActivitySelected: (activity: ActivityInterface) => void;
}

const ActivityList: React.FC<ActivityListProps> = ({ activities, onActivitySelected }) => {
  return (
    <div className="activity-list">
      {activities.map(activity => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
          onActivitySelected={onActivitySelected}
        />
        )
      )}
    </div>
  );
}

export default ActivityList;
