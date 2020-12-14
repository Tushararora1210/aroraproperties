import React from 'react';
import logo from './static/logo.jpg'

function Header() {

    return (
      <div class="header" >
      <img src={logo} />
      <p> Book Your Appointment By Calling us @ +919810617557</p>
      <div class="menu">
              <a id="1" href="">Home</a>
              <a id="2" href="">About Us</a>
              <a id="3" href="">Contact Us</a>
              <a id="4" href="">Testimonials</a>
              <a id="5" href="">Our Services</a>
      </div>
              <button  onClick={function showmobilemenu(){
      document.getElementsByClassName("mobilemenu")[0].style.display="flex";
      document.getElementsByClassName("mobilemenu")[0].style.flexDirection="column";
      }} id="menuicon">
                <div class="bar">
                </div>
                <div class="bar">
                </div>
                <div class="bar">
                </div>
              </button>
      
      <div class="mobilemenu"> 
      <button  onClick={function hidemobilemenu(){
        document.getElementsByClassName("mobilemenu")[0].style.display="none";}} id="menuicon">
              <div class="bar">
                </div>
                <div class="bar">
                </div>
                <div class="bar">
                </div>
      </button>
      <hr/>
           <a id="1" href="">Home</a>
           <hr/>
              <a id="2" href="">About Us</a>
              <hr/>
              <a id="3" href="">Contact Us</a>
              <hr/>
              <a id="4" href="">Testimonials</a>
              <hr/>
              <a id="5" href="">Our Services</a>

      </div>
     </div>
    );
  }
export default Header;