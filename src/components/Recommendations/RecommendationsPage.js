import React from 'react';
import { Button } from 'antd';
import { Link, withRouter } from "react-router-dom";
import RecommendationsList from './RecommendationsList';
import Banner from '../Banner/Banner';

const RecommendationsPage = () => {
    return (
      <React.Fragment>
        <div class="fullpage-card">
            <Banner/>
            <h2>Your Recommendations</h2>
            <h4 style={{color: "#222222"}}>The system generated the following recommendations for you to pursue. These recommendations are ranked, so that the first recommendation is expected to suit you most.</h4>
            <RecommendationsList/>
            <Link class="next-link" to="/pathways">
              <Button type="primary">Select a Pathway</Button>
            </Link>
        </div> 
      </React.Fragment>
    )
}

export default RecommendationsPage;