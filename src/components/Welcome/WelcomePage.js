import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import Banner from '../Banner/Banner';
import AI from '../../images/ai.png';
import Human from '../../images/human.png';



const WelcomePage = (props) => {
  const exp_index=props.Exp_Condition_1
  const exp_text = ["algorithm-based system","expert"]
  const exp_img = [AI,Human]
  console.log("index",exp_index)
    return (
      <React.Fragment>
        <div className="fullpage-card">
          <Banner/>
          <h2>Welcome to the CU-TLP online platform</h2>
          <br></br>
          <img src={exp_img[exp_index]}/>
          <h3>Your recommendations are ready, {props.firstName}.</h3>
          <h4 style={{color: "#222222"}}>Thank you for participating in the first iteration of Clemson University's Teacher Learning Progression (CU-TLP) recommender system. The <b>{exp_text[exp_index]}</b> has analyzed your preferences and information and calculated the most relevant professional development options for you.</h4>
          <br></br>
          <h4 style={{color: "#222222"}}>In the following pages, you can view your recommendations and other options that you can pursue. Recommended pathways will be provided, consisting of multiple required courses within a recommended pathway. Then, you will select options that interests you and sign the commitment form.</h4>
          <Link className="next-link" to="/recommendations">
            <Button type="primary">View Recommendations</Button>
          </Link>
        </div> 
      </React.Fragment>
    )
}

export default WelcomePage;