import React,{Component} from 'react'
import './SearchBox.css'
const SearchBox = (props) =>{
  return(
    <div className='center top'>
    <div className='br5 backk ml5 br5 shadow-4 centre center pa4'>
        <input onChange={props.onChange} id="name" className='f4 pa2 w-70 center' type="text" aria-describedby="name-desc" />
        <button onClick= {props.onSubmit} className='w-30 grow f4 link pointer ph3 pv2 dib white bg-light-purple'> TryIt!</button>
    </div>
  </div>
  );

}

export default SearchBox;
