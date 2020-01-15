import axios from 'axios';
import { ADD_REVIEW } from './types';

export const addReview = ({ message }) => dispatch => {
  console.log(message);
  // axios.post('/reviews/add-review', {
  //   reviewer: obj.reviewer,
  //   reviewer_name: obj.reviewer_name,
  //   reviewer_avatar: obj.reviewer_avatar,
  //   message: obj.message,
  //   booth_id: obj.booth_id
  // })
  // .then(res =>
  //   // dispatch({
  //   //   type: ADD_REVIEW,
  //   //   payload: res.data
  //   // })
  //   dispatch({
  //     type: ADD_REVIEW,
  //     payload: 'HIHIHI'
  //   })
  // )
};
