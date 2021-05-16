import { ActivityInterface } from '../interfaces/ActivityInterface';
import { FilterType } from '../interfaces/Filter';
import { TEST_DATA_ACTIVITIES } from '../testData/Activities';

export const actionTypes = {
  updateFilter: 'updateFilter',
};

type StateType = {
  filter: FilterType;
  activities: ActivityInterface[];
};

const applyFilter = (filter: FilterType): ActivityInterface[] => {
  return TEST_DATA_ACTIVITIES.filter((activity) => {
    // TODO Add filtering
    return activity;
  });
};

export const defaultState: StateType = {
  filter: {},
  activities: TEST_DATA_ACTIVITIES,
};

export const reducer = (state: StateType, action: any) => {
  switch (action.type) {
    case actionTypes.updateFilter:
      return { activities: applyFilter(action.data), filter: action.data };
    default:
      return state;
  }
};

export default reducer;
