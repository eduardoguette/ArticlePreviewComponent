import React, { Fragment } from "react";
import Footer from "./Components/Footer";
import FrontendMentorFoo from "../src/Components/FrontendMentor";
import CardComponent from "./Components/CardComponent";
import "./App.css";
import "./Components/Responsive.css";

function App() {
  return (
    <Fragment>
      <CardComponent />
      <FrontendMentorFoo />
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
