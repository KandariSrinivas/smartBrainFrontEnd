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
 apiKey: 'e28505f79df4468695081810b6ef0731'
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
      name:'',
      entries:'',
      joined: null,
      id:'',
      query: '',
      imageUrl:'',
      box:'',
      signedIn: false,
      route:'signin',         // home, register, signin

    }
  }
  onChange = (event)=>{
    this.setState({query:event.target.value})
  }

  calculate = (response) =>{
    let image =document.getElementById('inputimage');
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

  handleState = (data) => {
    const {name, entries, joined, id, query, imageUrl, box, route} = data
    if(data.id){
        this.setState({name, entries, joined, id, query, imageUrl, box:'', signedIn:true, route: 'home'});
    }
    else {
      this.setState({name, entries, joined, id, query, imageUrl, box:'', signedIn:false, route});
    }


  }

  onSubmit = () => {
    this.setState({imageUrl:this.state.query})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.query)
    .catch((err) => console.log("api not responding"))
    .then((response) =>  response.outputs[0].data.regions[0].region_info.bounding_box)
    .then((response) => this.calculate(response)) //this.calculate(response)
    .then((res)=> {
      this.setState({box : res});

      fetch("http://localhost:3001/image", {
        method: 'PUT',
        body: JSON.stringify({id: this.state.id}),
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => this.setState({entries: res.entries}))

     })
    .catch((err) => console.log('error', err));
 }

 render() {
    if(this.state.route == 'home'){
    return (
      <div>

        <Particles className  ='par' params= {jso} />
        <Navigation route={this.state.route} handleState={this.handleState}/>
        <Logo/>
        <Rank entries={this.state.entries} name= {this.state.name} />
        <SearchBox onChange={this.onChange} onSubmit = {this.onSubmit} />
        <Viewer box = {this.state.box} imageUrl = {this.state.imageUrl}/>
       </div>);
     }
     else if (this.state.route== 'signin') {
       return (
         <div>

           <Particles className  ='par' params= {jso} />
           <Navigation route={this.state.route} handleState={this.handleState}/>
           <Logo />
           <Signin handleState = {this.handleState} />
          </div>
       );
     }
     else {
       return (
         <div>

           <Particles className  ='par' params= {jso} />
           <Navigation route={this.state.route} handleState={this.handleState}/>
           <Logo/>
           <Register handleState = {this.handleState} />
          </div>
       );
     }

}

}
export default App;
