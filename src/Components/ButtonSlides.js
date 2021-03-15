import React from 'react';
import '../Styles/ButtonSlides.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ButtonSlides({ index, pic }) {
  const color = pic == index ? 'red' : "white"
  return (
    <FiberManualRecordIcon className="buttonSlide" style={{color: `${color}`}} />
  )
}

export default ButtonSlides
// style={{color: `${color}`, height: '10px', borderRadius: '50px'}}