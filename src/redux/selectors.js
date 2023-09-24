import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectItems = state => state.contacts.items;

export const selectCount = createSelector([selectItems], items => {
  return items.length;
});

export const selectCountOnLine = createSelector([selectItems], items => {
  return items.reduce((acc, item) => {
    if (item.onLine === true) {
      return acc + item.onLine;
    }
    return acc;
  }, 0);
});
