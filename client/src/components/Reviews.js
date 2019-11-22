import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const Reviews = () => {
  return(
  <Comment.Group>
  <Header as='h3' dividing>
    Reviews
  </Header>

  <Comment>
    <Comment.Content>
      <Comment.Author as='a'>Matt</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>The vegetables here are absolutely delightful! I would definitely recommend getting your produce here!</Comment.Text>
    </Comment.Content>
  </Comment>
  <Comment>
    <Comment.Content>
      <Comment.Author as='a'>James</Comment.Author>
      <Comment.Metadata>
        <div>Sunday at 3:22PM</div>
      </Comment.Metadata>
      <Comment.Text>The vegetables here are absolutely delightful! Come get your fresh stuff and eat it all up silly willy! :-)</Comment.Text>
    </Comment.Content>
  </Comment>
  </Comment.Group>
  )
}

export default Reviews