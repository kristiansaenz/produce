import axios from 'axios';
import { SET_SELECTED_BOOTH, CLEAR_SELECTED_BOOTH, ADD_REVIEW, REVIEW_LOADING } from './types'

export const setSelectedBooth = ({id}) => dispatch => {
  fetchData(id)
  .then(booth => 
    dispatch({
      type: SET_SELECTED_BOOTH,
      payload: booth
    })
  )
}

export const clearSelectedBooth = () => dispatch => {
  dispatch({
    type: CLEAR_SELECTED_BOOTH,
  })
}

export const addReview = ( reviewer, reviewer_name, reviewer_avatar, message, booth_id ) => dispatch => {
  console.log(reviewer, reviewer_name, reviewer_avatar, message, booth_id)
  dispatch({
    type: REVIEW_LOADING
  })

  axios.post('/reviews/add-review', {
    reviewer: reviewer,
    reviewer_name: reviewer_name,
    reviewer_avatar: reviewer_avatar,
    message: message,
    booth_id: booth_id
  })
    .then(res => {
      console.log(res.data)
      dispatch({
        type: ADD_REVIEW,
        payload: res.data,
      })
    })
}

const fetchData = async (id) => {
  const boothRequest = await axios.get(`/booths/${id}`)
  const ownerRequest = await axios.post('/users/getUserByBoothId', {
    id: id
  })
  let owner = ownerRequest.data[0]
  let user = {
    name: owner.name,
    email: owner.email,
    avatar: owner.avatar
  }
  let boothInfo = { ...boothRequest.data, ...user }
  return boothInfo
};