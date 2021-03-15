import React, { useState, useEffect } from 'react';
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
  const [pic, setPic] = useState(0);
  const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8]

  useEffect(() => {
    const interval = setInterval(() => {
      if (pic <= 0 || pic <= (imageArray.length)) {
        console.log(pic)
        setPic(pic + 1);
      }
      if (pic == imageArray.length-1) {
         setPic(0)
      }

    }, 3000);
    return () => clearInterval(interval);
  }, [pic]);

  return (
    <div className="middleTopContainer">
      <img src={imageArray[pic]} alt="" />
      <div className="buttonSlideContainer">
        <ButtonSlides color={"red"} />
        <ButtonSlides color={"white"} />
        <ButtonSlides color={"white"} />
        <ButtonSlides color={"white"} />
        <ButtonSlides color={"white"} />
        <ButtonSlides color={"white"} />
        <ButtonSlides color={"white"} />
        <ButtonSlides color={"white"} />
      </div>

    </div>
  )
}

export default MiddleTop
