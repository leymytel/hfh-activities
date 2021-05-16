import React from 'react';
import { format } from 'date-fns';

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

  console.log(dateCreated);
  const formattedDate = format(new Date(dateCreated as string), 'dd MMMM yyyy, HH:mm');

  return (
    <div className="activity-list-item-wrapper" onClick={() => onActivitySelected(activity)}>
      <div className="activity-list-item-title" dangerouslySetInnerHTML={{ __html: title}} />
      <p className="activity-list-item-description">{description}</p>
      <div className="activity-list-item-date">{formattedDate}</div>
    </div>
  );
}

export default ActivityListItem;
