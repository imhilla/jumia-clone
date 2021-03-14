import React from 'react';
import '../Styles/LeftTop.css';
import LeftTopOption from './LeftTopOption';
import Supermarket from '../images/supermarket.png';
import Health from '../images/beauty.png';
import Home from '../images/home.png';
import Phone from '../images/phones.png';
import Computing from '../images/computing.png';
import Electronics from '../images/tv.png';
import Shirt from '../images/shit.png';
import Gaming from '../images/gaming.png';
import Baby from '../images/baby.png';
import Sporting from '../images/sporting.png';
import Garden from '../images/garden.png';
import Others from '../images/others.png';


function LeftTop() {
  return (
    <div className="leftTopContainer">
      <LeftTopOption Icon={Supermarket} title="Supermarket" />
      <LeftTopOption Icon={Health} title="Health & Beauty" />
      <LeftTopOption Icon={Home} title="Home & Office" />
      <LeftTopOption Icon={Phone} title="Phones & Tablets" />
      <LeftTopOption Icon={Computing} title="Computing" />
      <LeftTopOption Icon={Electronics} title="Electronics" />
      <LeftTopOption Icon={Shirt} title="Fashion" />
      <LeftTopOption Icon={Gaming} title="Gaming" />
      <LeftTopOption Icon={Baby} title="Baby Products" />
      <LeftTopOption Icon={Sporting} title="Sporting Goods" />
      <LeftTopOption Icon={Garden} title="Garden & Outdoors" />
      <LeftTopOption Icon={Others} title="Others" />
    </div>
  )
}

export default LeftTop
