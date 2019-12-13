import { SET_SELECTED_BOOTH, CLEAR_SELECTED_BOOTH, ADD_REVIEW, REVIEW_LOADING, REVIEW_LOADED } from '../actions/types'

const initialState = {
  reviews: [],
  reviewsLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_SELECTED_BOOTH:
      return { 
        ...state,
        ...action.payload 
      }
    case CLEAR_SELECTED_BOOTH:
      return {}
    case REVIEW_LOADING:
      return {
        ...state,
        reviewsLoading: true
      }
    case ADD_REVIEW:
      const newState = state
      state.reviews = action.payload
      state.reviewsLoading = false
      return newState

    default:
      return state
  }
}