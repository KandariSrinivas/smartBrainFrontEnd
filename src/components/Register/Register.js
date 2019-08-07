import React,{Component} from 'react'
import'./Register.css'

const Register = ({changeRoute}) => {
   return (
     <div>
       <main class="pa4 black-80">
   <form class="measure shadow-5 pa4 center">
     <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
       <legend class="f4 fw6 ph4 mh0">Sign In</legend>
       <div class="mt3 ph4">
         <label class="db fw6 lh-copy f6" for="email-address">Email</label>
         <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
       </div>
       <div class="mt3 ph4">
         <label class="db fw6 lh-copy f6" for="first-name">First Name </label>
         <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="first-name"  id="first-name" />
       </div>
       <div class="mt3 ph4">
         <label class="db fw6 lh-copy f6" for="last-name">last name</label>
         <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="last-name"  id="last-name" />
       </div>

       <div class="mv3 ph4">
         <label class="db fw6 lh-copy f6" for="password">Password</label>
         <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
       </div>
    </fieldset>
     <div class="ph4">
       <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" onClick={()=>changeRoute('home')} value="Register" />
     </div>
     </form>
 </main>

     </div>
   );

}
export default Register;
