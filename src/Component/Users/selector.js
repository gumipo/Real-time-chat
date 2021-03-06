import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getUserId = createSelector([usersSelector], (state) => state.uid);

export const getUserName = createSelector(
  [usersSelector],
  (state) => state.username
);
export const getTwitterName = createSelector(
  [usersSelector],
  (state) => state.twitterName
);
export const getIsSignedIn = createSelector(
  [usersSelector],
  (state) => state.isSignedIn
);
export const getUserImage = createSelector(
  [usersSelector],
  (state) => state.image
);
