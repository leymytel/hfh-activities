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
      <div className="activity-details-title" dangerouslySetInnerHTML={{ __html: title}} />
      <p className="activity-details-description">{description}</p>
      <p className="activity-details-long-description">{details}</p>
    </div>
  );
}

export default ActivityDetails;
