import React, { Component } from 'react';
class Card extends Component{
    render(){
        const profile = this.props;
        return (
          <div className="github.profile">
            <img width="75px" src= {profile.avatar_url} />
            <div className="info"style={{display: 'inline-block', marginLeft: 10}}>
              <div className="name" style={{fontSize: '125%'}}>{profile.name}</div>
              <div className="company">{profile.company}</div>
            </div>
          </div>
        );
    }
  }
  export default Card;