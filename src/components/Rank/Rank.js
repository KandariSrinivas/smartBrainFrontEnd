import React,{Component} from 'react'

const Rank = (props) =>{
  return(
    <div>
    <p className='tc f3 lh-copy '>{`Hey ${props.name}! Test this cool Image Facial Recognition App`}</p>
    <p className='fw6 tc f3 lh-copy'>Your Entries # {props.entries} </p>
    </div>
  );

}

export default Rank;
