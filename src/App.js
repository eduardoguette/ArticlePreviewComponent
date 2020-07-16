import React, { Fragment } from 'react';
import './App.css';
import Footer from "./Components/Footer"
import FrontendMentorFoo from "../src/Components/FrontendMentor"
import Background from './Components/Background';
import TextInfo from './Components/TextInfo';
import Banner from './Components/Banner';

function App() {
  return (
    <Fragment>
      <div className="card-component">
        <Background />
        <TextInfo />
        <Banner />
      </div>
      <FrontendMentorFoo />
      <Footer />
    </Fragment>
  );
}

export default App;
