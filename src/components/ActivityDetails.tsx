import React from 'react';
import { ActivityInterface } from "../interfaces/ActivityInterface";

interface ActivityListItemProps {
  activity?: ActivityInterface | null;
}

const ActivityDetails: React.FC<ActivityListItemProps> = ({ activity }) => {
  if (!activity) return null;

  const {
    title,
    description,
    details,
  } = activity;

  return (
    <div className="activity-details">
      <h2 className="activity-details-title">{title}</h2>
      <p className="activity-details-description">{description}</p>
      <p className="activity-details-long-description">{details}</p>
    </div>
  );
}

export default ActivityDetails;
