import React, {useState} from "react";

import axios from "axios"

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [userInput, setUserInput] = useState({'username': "", "password": ""})

  const handleChange = type => e => {
     setUserInput({ ...userInput, type: userInput[type] = e.target.value })
  }

 

  const login = (payload) => {
  
    axios
        .post('http://localhost:5000/api/login', payload)
        .then(res => {
            console.log("this is res.data", res.data);
            localStorage.setItem('token', res.data.payload)
            
            // return props.history.push("/bubblepage")
        })
        .catch(err => {
            console.log("this is login error", err)
        })
}

  const handleLogin = (e) => {
      e.preventDefault()
      let captureEntries = {
          username: userInput['username'],
          password: userInput['password']
      }
      login(captureEntries)
  
 
  }



  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
      <input
          type="text"
          name= "username"
          value= {userInput['username']}
          onChange={handleChange('username')}
      />
      <input
          type="password"
          name="password"
          value= {userInput['password']}
          onChange={handleChange('password')}
      />
      <button>Login!</button>
  </form>
    </>
  );
};

export default Login;
