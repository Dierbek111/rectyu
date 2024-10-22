import React from 'react'
import'./Header.css'
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header_wrapper">
            <div className="header_box">
              <h1>Lorem ipsum dolor sit amet <br /><span>consectetur</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero eligendi neque?</p>
              <button>Lorem, ipsum.</button>

            </div>

              <img src="https://abbos29.github.io/dream/img/main.png" alt="" className="header_img" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
