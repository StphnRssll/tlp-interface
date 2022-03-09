import React from 'react';
import { List } from 'antd';

const RecommendationsList = (props) => {
  const exp_index=props.Exp_Condition_2-1
  const exp_text = ["Why might this be a good choice?","This is a good choice because:"]
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={props.recommendations}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<img alt="computer icon" src="https://cdn.iconscout.com/icon/free/png-512/online-classes-2598778-2224424.png" style={{maxWidth: 20+"px"}}/>}
              // title={<a href="https://ant.design">{item.name}</a>}

              title={<p>Recommendation #{item.rec_pos}: <b>{item.name}</b></p>}
              description={item.justification ? <p><b>{exp_text[exp_index]} </b>{item.justification}</p>: ''}
              className={("recommended_"+item.rec_pos)}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
  
export default RecommendationsList;