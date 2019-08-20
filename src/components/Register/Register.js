import React,{Component} from 'react'
import'./Register.css'

class Register extends Component {
  constructor(){
    super();
    this.state = {

    };
  }

  onSubmit = () => {
    const email = document.getElementById('email-address').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('user-name').value;
    const options  = {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email, password, username}),
    }

    fetch('http://localhost:3001/register', options)
    .then(res => res.json())
    .then((res) => {
        if(res.id) {
          fetch(`http://localhost:3001/profile/${res.id}`)
          .then((res) => res.json())
          .then(res => this.props.handleState(res))
        }
    }).catch((err) => console.log('couldn\'t register'));
  }

  render() {
    return (
      <div>
        <main class="pa4 black-80">
    <form class="measure shadow-5 pa4 center">
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend class="f4 fw6 ph4 mh0">Register Up</legend>
        <div class="mt3 ph4">
          <label class="db fw6 lh-copy f6" for="email-address">Email</label>
          <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
        </div>
        <div class="mt3 ph4">
          <label class="db fw6 lh-copy f6" for="first-name">User Name </label>
          <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="first-name"  id="user-name" />
        </div>

        <div class="mv3 ph4">
          <label class="db fw6 lh-copy f6" for="password">Password</label>
          <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
        </div>
     </fieldset>
      <div class="ph4">
        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" onClick={this.onSubmit} value="Register" />
      </div>
      </form>
  </main>

      </div>
    );
  }
}

export default Register;
