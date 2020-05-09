import React from 'react';
import './App.css';

//about page structure
function About() {
  return (
    <div>
      <h2>About The Application</h2>
      <p>The purpose of the application is for users to keep a log of any bank transactions that they have made as well as visualise their current income, outgoings and total balance of their account</p>
      <p>Inspiration for this app was taken from different mobile banking apps</p>
      <p>The application uses a MERN stack which incorporates Mongoose, Express, React and Node. As well as a few other packages such as Axios (Morgan and Colours were two packages used for console development purposes)</p>
      <p>MongoDB is used for the backend database with a cloud database (Atlas) that links our MONGO_URI from our cluster to retrieve the data</p>
      <p>Stack Overflow and Youtube were used for troubleshooting purposes</p>
    </div>
  );
}

export default About;
