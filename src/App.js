import React, { Component } from 'react';
import NavBar from './NavBar';
import ContactUsPaper from './ContactUsPaper';
import PaperLandingMain from './PaperLandingMain';
import Carousel from './Carousel';
import Login from './Login';
import Footer from './Footer';

class App extends Component 
{
  render()
  {
    return(
      <div>
        <NavBar>
          <PaperLandingMain/>          
          <Carousel />
          <ContactUsPaper />
          <Footer /> 
        </NavBar>
      </div>
    );
  }
}

export default App;
