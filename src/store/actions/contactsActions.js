import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE,
  POST_CONTACT,
  POST_CONTACT_SUCCESS,
  POST_CONTACT_FAILURE,
  DELETE_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
} from '../types'
import axios from '../../services'

export const fetchContacts = (endpoint = '/contacts') => {
  return async (dispatch) => {
    dispatch({
      type: GET_CONTACTS,
    })
    try {
      const { data } = await axios.get(endpoint)
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: GET_CONTACTS_FAILURE,
        payload: error.message,
      })
    }
  }
}

export const createContact = (newContact) => {
  return async (dispatch) => {
    dispatch({
      type: POST_CONTACT,
    })
    try {
      const { data } = await axios.post('/contacts', newContact)
      dispatch({
        type: POST_CONTACT_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: POST_CONTACT_FAILURE,
        payload: error.message,
      })
    }
  }
}

export const deleteContact = (contactId) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: contactId,
    })
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`)
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: DELETE_CONTACT_FAILURE,
        payload: error.message,
      })
    }
  }
}
