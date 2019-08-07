import React,{ Component } from 'react'

const Navigation = ({route,changeRoute}) => {


    if ((route === 'signin' || route ==='register') ) {
    return(<div>
      <p className='tr underline fw5 pointer dim mr4 mv2' onClick={()=>changeRoute('signin')} >SignIn </p>
      <p className='tr underline fw5 pointer dim mr4 mv2' onClick={()=>changeRoute('register')} >Register</p>
    </div>); }
    else {
   return(
    <div>
        <p className='tr underline fw5 pointer dim mr4 mv2' onClick={()=>changeRoute('signin')} >Sign Out</p>
    </div>);
  }
}
export default Navigation;
/*const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {

      return (

        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>

          <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>

        </nav>

      );

    } else {

      return (

        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>

          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>

          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>

        </nav>

      );

    }

}



export default Navigation;
*/
