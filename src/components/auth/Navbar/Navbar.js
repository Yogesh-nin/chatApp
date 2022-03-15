import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <div className="row d-flex justify-content-between w-100">
                  <div className="col-2">
                    <span className="d-none d-md-block mx-2">username</span>
                  </div>

                  <div className="col-6 col-md-4">
                    <form className="search-box">
                        <input type="text" placeholder="search for friends, posts or videos" className="search-field w-100"/>
                        <span className='search-icon d-flex align-items-center'><i class="fa-solid fa-magnifying-glass"></i></span>
                    </form>
                  </div>

                  <div className="col-2 mx-2 d-flex justify-content-center">
                    <div className="mx-2  d-none d-md-block">homepage</div>
                    <div className="mx-2  d-none d-md-block">timeline</div>
                  </div>

                  <div className="col-2 d-flex justify-content-center">
                    <span className="mx-2"><i class="fa-solid fa-user fa-lg"></i></span>
                    <span className="mx-2"><i class="fa-solid fa-message fa-lg"></i></span>
                    <span className="mx-2"><i class="fa-solid fa-bell fa-lg"></i></span>
                  </div>
                  <div className="col-1 mx-2">
                    <i class="fa-solid fa-circle-user fa-lg"></i>
                  </div>
              </div>

              
              

          </div>

      </nav>
  )
}

export default Navbar