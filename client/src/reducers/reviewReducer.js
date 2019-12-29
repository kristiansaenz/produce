import { ADD_REVIEW } from '../actions/types'

const initialState = {}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_REVIEW:
    console.log(action.payload)
      return { 
        ...state,
        ...action.payload 
      }
    default:
      return state
  }
}