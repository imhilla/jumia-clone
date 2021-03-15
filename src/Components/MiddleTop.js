import React from 'react';
import '../Styles/MiddleTop.css';
import image1 from '../images/firstimage.jpg';
import image2 from '../images/secondimage.jpg';
import image3 from '../images/thirdimage.gif';
import image4 from '../images/forthimage.jpg';
import image5 from '../images/fifthimage.jpg';
import image6 from '../images/sixthimage.jpg';
import image7 from '../images/seventh.jpg';
import image8 from '../images/lastimage.jpg';
import ButtonSlides from '../Components/ButtonSlides';


function MiddleTop() {
  return (
    <div className="middleTopContainer">
      <img src={image1} alt="" />
      <ButtonSlides />
    </div>
  )
}

export default MiddleTop
