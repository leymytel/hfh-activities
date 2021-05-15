import React from 'react';
import { ActivityInterface } from "../interfaces/ActivityInterface";

interface ActivityListItemProps {
  activity: ActivityInterface;
  onActivitySelected: (activity: ActivityInterface) => void;
}

const ActivityListItem: React.FC<ActivityListItemProps> = ({ activity, onActivitySelected }) => {
  const {
    title,
    description,
    dateCreated
  } = activity;

  return (
    <div className="activity-list-item-wrapper" onClick={() => onActivitySelected(activity)}>
      <h2 className="activity-list-item-title">{title}</h2>
      <p className="activity-list-item-description">{description}</p>
      <div>{dateCreated}</div>
    </div>
  );
}

export default ActivityListItem;
