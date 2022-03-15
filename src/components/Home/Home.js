import React from 'react'
import Register from '../auth/Register/Register'
import Login from '../auth/Login/Login'
import './Home.css'

const Home = () => {
  return (
    <div className="container-fluid min-vh-100" style={{backgroundColor: '#F0F2F5'}}>
        <div className="row min-vh-100 align-items-center justify-content-center">
            <div className="col-12 col-sm-4">
                <h1 className="chatApp-title">Chat App</h1>
                <p className="chatApp-para">chat with your friends in real times</p>
            </div>
            <Login />


        </div>
    </div>
  )
}

export default Home 