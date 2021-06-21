import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const DetailsCard: React.FC = () => {
  const { selectedItem } = useContext(AppContext);

  return (
    <div className="detailsCard">
      <p className="cardName">{selectedItem.name.toLocaleLowerCase()}</p>
      <div className="cardInfo">
        <div className="cardItem">
          <div className="cardTitle">
            <p className="icon">B</p>
            <p className="title">irthday</p>
          </div>
          <p className="cardText">{selectedItem.birthday}</p>
        </div>
        <div className="cardItem">
          <div className="cardTitle">
            <p className="title">oc</p>
            <p className="icon">1</p>
            <p className="title">pation</p>
          </div>
          <p className="cardText">
            {selectedItem.occupation.map(item => {
              return <p>{item}</p>;
            })}
          </p>
        </div>
        <div className="cardItem">
          <div className="cardTitle">
            <p className="icon">S</p>
            <p className="title">tatus</p>
          </div>
          <p className="cardText">{selectedItem.status}</p>
        </div>
        <div className="cardItem">
          <div className="cardTitle">
            <p className="icon">0</p>
            <p className="title">ckname</p>
          </div>
          <p className="cardText">{selectedItem.nickname}</p>
        </div>
        <div className="cardItem">
          <div className="cardTitle">
            <p className="title">appe</p>
            <p className="icon">)</p>
            <p className="title">ance</p>
          </div>
          <p className="cardText">
            {selectedItem.appearance.map(item => {
              return <p>season {item}</p>;
            })}
          </p>
        </div>
        <div className="cardItem">
          <div className="cardTitle">
            <p className="icon">P</p>
            <p className="title">ortrayed</p>
          </div>
          <p className="cardText">{selectedItem.portrayed}</p>
        </div>
        <div className="cardItem">
          <div className="cardTitle">
            <p className="title">c</p>
            <p className="icon">@</p>
            <p className="title">egory</p>
          </div>
          <p className="cardText">{selectedItem.category}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
