import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = user => createSelector([selectUser], (user) => user.currentUser)