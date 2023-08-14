import React from 'react';
//import FeedbackForm from './Form';
import FeedbackForm from './GenericFormElements'
import Container from '@mui/material/Container'
import image from './bitcoin.jpg';
// import { urlAlphabet } from 'nanoid';
const App = () => {

  return (
    <>
    <Container id="content-container" maxWidth="false">
      <div className="formbox-half">
          <FeedbackForm title={"Sign up For Our Huge Bitcoin Scam!"} description={"There are two general ways you can get involved with our Bitcoin scam: Just talk to us long enough for us to social engineer your digital wallet information away from you or simply send us some Bitcoin! Either way you will get nothing in return."}/>
      </div>
      <div className="formbox-half" style={{ minHeight: '100vh', height:'100%', width: '100%', overflow:'hidden', background: `url(${image})`}}>
      </div>
    </Container>
    </>
  );
};


export default App;