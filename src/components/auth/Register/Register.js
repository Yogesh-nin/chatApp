import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className="col-12 col-sm-6 auth-form">
          <form className="my-4 mx-3 form-floating">
            <div className="my-3">
              <input type="text" className="form-control input-box" id="username" placeholder="Username" />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control input-box"
                id="email"
                placeholder="Email"

              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control input-box"
                id="password"
                placeholder='Password'
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control input-box"
                id="password-again"
                placeholder='Password Again'
              />
            </div>
            <div className="d-grid gap-2 mb-3">
              <button type="submit" class="btn btn-primary form-btn py-2">
                Sign up
              </button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn switch-btn form-btn px-5 py-2">
                    Log into account
                </button>
            </div>
            
          </form>
          
        </div>
  )
}

export default Register