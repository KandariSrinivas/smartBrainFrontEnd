import React,{Component} from 'react'
import './Viewer.css'
const Viewer =({ imageUrl, box })=>{
   return (

    <div className='center centre ma'>

      <div className='absolute mt2'>

        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>

        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>

        </div>

    </div>

  );

}

export default Viewer;
