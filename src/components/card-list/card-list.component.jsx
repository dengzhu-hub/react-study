// import { Component } from "react";
import './card-list.style.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => {
  console.log('render from CardList');
  return (
    <div className="card-list" >
      {monsters.map(mon => {
        return <Card monsters={mon}  key={mon.id}/>;
      })}
    </div>
  );
};
export default CardList;
