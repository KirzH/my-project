import React from 'react';
import Header from '../header/header';
import AboutUs from '../about-us/about-us';
import OurWork from '../our-work/our-work';
import Price from '../price/price';
import Contacts from '../contacts/contacts'

import './app.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <AboutUs />
      <OurWork />
      <Price />
      <Contacts />
      </div>
  );
};

export default App;
