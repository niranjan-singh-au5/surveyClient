import React from 'react';
import logo from './logo.svg';
import Employee from './components/selectEmployee';
import Survey from './components/surveyList'
import Done from './components/add'
//  import './App.scss';

function App() {
  return (
    <>
    <div className="container">
   <Employee/>
    <Survey/>
    <Done/>
  </div>
   </>
  );
}

export default App;
