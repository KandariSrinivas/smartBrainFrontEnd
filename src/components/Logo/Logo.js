import React,{Component} from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'
const Logo = () => {
  return(
   <div className='mh4 mt0'>
   <Tilt className="Tilt shadow-5 br3" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa4">
          <img alt='brain' src={brain} />
        </div>
   </Tilt>
   </div>

  );
}

export default Logo;
