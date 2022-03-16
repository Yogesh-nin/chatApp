import React, { useState } from "react";
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': "ab55c953-a90a-488e-ad90-ccc0da6e1dd6", 'User-Name': username, 'User-Secret': password};

    try {
      await axios.get('https://api.chatengine.io/chats', {headers: authObject});

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="col-12 col-sm-6 auth-form">
          <form className="my-4 mx-3 form-floating" onSubmit={handleSubmit}>
            <div class="my-4">
              <input
                type="text"
                class="form-control input-box"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                required

              />
            </div>
            <div class="my-4">
              <input
                type="password"
                class="form-control input-box"
                id="password"
                placeholder='Password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required

              />
            </div>
            <div className="d-grid gap-2 my-4">
              <button type="submit" class="btn btn-primary form-btn py-2">
                Login
              </button>
            </div>

            <div className="d-flex justify-content-center my-4">
              <a className='text-decoration-none' href="">Forgot password?</a>
            </div>
            

            <div className="d-flex justify-content-center">
                <button className="btn switch-btn form-btn px-5 py-2">
                    Create a new account
                </button>
            </div>
            
          </form>
          
        </div>
  );
};

export default Login;
