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

const initialState = {
  allContacts: [],
  contact: null,
  isLoading: false,
  error: null,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        isLoading: true,
      }
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allContacts: action.payload,
      }
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case POST_CONTACT:
      return {
        ...state,
        isLoading: true,
      }
    case POST_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contact: action.payload,
      }
    case POST_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case DELETE_CONTACT:
      return {
        ...state,
        isLoading: true,
        allContacts: state.allContacts.filter(
          (contact) => contact.id !== action.payload
        ),
      }
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contact: action.payload,
      }
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default usersReducer
