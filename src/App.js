import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecommendationsPage from './components/Recommendations/RecommendationsPage';
import PathwaysPage from './components/Pathways/PathwaysPage';
import ConfirmPage from './components/Confirm/ConfirmPage';
import WelcomePage from './components/Welcome/WelcomePage';
import Submitted from './components/Submitted/SubmittedPage'
import { useState, useEffect } from 'react';

/*
TODO:
  later:
    - define behavior for going back (localstorage?) and bad urls and whatnot
*/

function App() {
  // data will hold data from json/api response
  const [data, setData] = useState('');
  const [allOptions, setallOptions] = useState('');

  // borrowed code to fetch json
  const getData=()=>{
    fetch('testing/sample_user_data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson);

        // make allOptions array
        const pathwayObjects = myJson.data.options;
        // console.log('App.js: pathwayObjects',pathwayObjects)
        let unflatAllOptions = [
          pathwayObjects["Endorsement"],
          pathwayObjects["Master's Degree"],
        ]
        // here we are drilling into "Microcredentials" and getting each course out, and pushing the result to unflatAll
        let coursesInMicrocredential = pathwayObjects["Microcredential"].map(thisRow => {
          let coursesInThisRow = thisRow.courses.map(course => {
            return course
          })
          return coursesInThisRow
        })
        unflatAllOptions.push(coursesInMicrocredential.flat());
        // console.log("unflatAllOptions after pathwayObjects['Microcredential']",unflatAllOptions);
        setallOptions(unflatAllOptions.flat())
      });
  }
  useEffect(()=>{
    getData()
  },[])



  return (
    <div className="App">
      {/* TODO: Add breadcrumbs */}
      <Router>
        <Route path="/" exact component={() => data && <WelcomePage firstName={data.data.First_Name} />} />
        <Route path="/recommendations" exact component={() => data && <RecommendationsPage recommendations={data.data.recommendations}/>} />
        <Route path="/pathways" exact component={() => data && <PathwaysPage pathways={data.data.options} allOptions={allOptions}/>} />
        <Route path="/confirm" exact component={() => data && <ConfirmPage allOptions={allOptions}/>} />
        <Route path="/submitted" exact component={() => data && <Submitted/>} />
      </Router>
      <div className="footer">
        <p>Having issues? Reach out to CCIT for help.</p>
        <a href="https://ccit.clemson.edu/">https://ccit.clemson.edu</a>
      </div>
    </div>
  );
}

export default App;
