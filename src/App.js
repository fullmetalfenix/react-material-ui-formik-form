import React from 'react';
//import FeedbackForm from './Form';
import FeedbackForm from './GenericFormElements'
import Container from '@mui/material/Container'
//import image from './bitcoin.jpg';
// import { urlAlphabet } from 'nanoid';
const App = () => {

  return (
    <>
    <Container id="content-container" maxWidth="false">
      <FeedbackForm />

    </Container>
    </>
  );
};


export default App;