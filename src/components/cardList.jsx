import React from 'react';
import Card from './card';
const CardList = (props) => (
    <div>
      {props.profiles.map(profile =>  <Card key={profile.id} {...profile} />)}
    </div>
  );
export default CardList;
