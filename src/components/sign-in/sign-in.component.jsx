import React from 'react';
import  FormInput from "../form-input/form-input.component"
import './sign-in.styles.scss';

class SignIn  extends React.Component{
  constructor(props){
   super(props);

   this.state={
     email    :'',
     password :''
   }
  }
  handleSubmit=(event)=>{
      event.preventDefaults();
      this.setState({email:'',password:''})
  }

handleChange=(event)=>{
  const {value , name} = event.target;
  this.setState({[name]:value})
  
}
  
  render(){
      return(
    <div className='sign-in'>
        <h2>I already have an acount</h2>
        <span>Sign in with Email and passord</span>

      <form onSubmit={this.handleSubmit}>
         <FormInput
          name="email"
          type="email"
          handelChnge={this.handleChange}
          label="email" 
          value={this.state.email}
          required
        />
       
         <FormInput
           name="password"
           type="password" 
           handelChnge={this.handleChange}
           label="password"
           required
           value={this.state.password} 
        /> 
        
         <input type="submit" value="submit form"/>
      </form>
   </div>
      )
    }
}

export default SignIn