import React from 'react';
import '../Styles/ButtonSlides.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ButtonSlides({ color }) {
  return (
    <FiberManualRecordIcon className="buttonSlide" />
  )
}

export default ButtonSlides
// style={{color: `${color}`, height: '10px', borderRadius: '50px'}}