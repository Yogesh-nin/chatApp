import React from "react";

const Login = () => {
  return (
    <div className="col-12 col-sm-6 auth-form">
          <form className="my-4 mx-3 form-floating">
            <div class="my-4">
              <input
                type="email"
                class="form-control input-box"
                id="email"
                placeholder="Email"

              />
            </div>
            <div class="my-4">
              <input
                type="password"
                class="form-control input-box"
                id="password"
                placeholder='Password'
              />
            </div>
            <div className="d-grid gap-2 my-4">
              <button type="submit" class="btn btn-primary form-btn py-2">
                Login in
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
