import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import Viewer from './components/Viewer/Viewer'
import SearchBox from './components/SearchBox/SearchBox'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
const app = new Clarifai.App({
 apiKey: 'a42f627d551c4830bbd6fc72c7c962c5'
});

//Particles options
var jso ={
  particles: {
     number: {
       value: 120,
       density: {
         enable: true,
         value_area: 1000
       }
     }
   }
 }

class App extends Component {
  constructor(){
    super();
    this.state={
      query: '',
      imageUrl:'',
      box:'',
      signedIn: true,
      route:'home',         // home, register, sigin

    }
  }
  onChange = (event)=>{
    this.setState({query:event.target.value})
  }
  calculate = (response) =>{
    let image =document.getElementById('ii');
    const width = Number(image.width);
    console.log("calculating....")
    const height = Number(image.height);

    return {

      leftCol: response.left_col * width,

      topRow: response.top_row * height,

      rightCol: width - (response.right_col * width),

      bottomRow: height - (response.bottom_row * height)

    }
}
  changeRoute = (s)=>{
    if (s=='home'){
      this.setState({signedIn:true, route:s}
    )}
    else{
      this.setState({signedIn:false,route:s}
      )}
    }
      //this.setState({route:s})
      //console.log(this.state.route)

  onSubmit = ()=>{
    this.setState({imageUrl:this.state.query})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.query)
    .catch((err)=>console.log("api not responding"))
    .then((response) =>  response.outputs[0].data.regions[0].region_info.bounding_box)
    .then((response) => {
      console.log('inside')
      let image =document.getElementById('ii');
      const width = Number(image.width);
      console.log("calculating....")
      const height = Number(image.height);

      return {

        leftCol: response.left_col * width,

        topRow: response.top_row * height,

        rightCol: width - (response.right_col * width),

        bottomRow: height - (response.bottom_row * height)
}
  })
    .catch('no calculating')
    .then((r)=>console.log(r))
  //  .then((r)=> this.setState({box:r}))
  //    this.setState({box : this.calculate(res)})
  //      console.log(this.calculate(res))

    //console.log(this.state.box)
  }
//  this.setState({box : this.calculate(response)})


  render() {

  //    this.setState({route:'home'})
    if(this.state.route == 'home'){
    return (
      <div>

        <Particles className  ='par' params= {jso} />
        <Navigation route={this.state.route} changeRoute={this.changeRoute}/>
        <Logo/>
        <Rank/>
        <SearchBox onChange={this.onChange} onSubmit = {this.onSubmit} />
        <Viewer box = {this.state.box} imageUrl = {this.state.imageUrl}/>
       </div>);
     }
     else if (this.state.route== 'signin') {
       return (
         <div>

           <Particles className  ='par' params= {jso} />
           <Navigation route={this.state.route} changeRoute={this.changeRoute}/>
           <Logo/>
           <Signin changeRoute={this.changeRoute} />
          </div>
       );
     }
     else {
       return (
         <div>

           <Particles className  ='par' params= {jso} />
           <Navigation route={this.state.route} changeRoute={this.changeRoute}/>
           <Logo/>
           <Register changeRoute={this.changeRoute} />
          </div>
       );
     }



}}
export default App;
