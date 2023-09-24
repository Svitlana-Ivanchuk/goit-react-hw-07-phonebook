import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://65103f7d3ce5d181df5d103c.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get(`/contacts`);
    dispatch(fetchingSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

export async function addContact(contact) {
  const response = await axios.post(`/contacts`, contact);
  return response.data;
}

export async function deleteContact(contactId) {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
}
