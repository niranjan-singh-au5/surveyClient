import React from 'react';
import Employee from './components/selectEmployee';
import Survey from './components/surveyList'
import Done from './components/add'


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
