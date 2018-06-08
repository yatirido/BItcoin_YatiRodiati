import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';

import './App.css';

import KonversiBitcoinkeRp from './component/KonversiBitcoinKeRp';
import KonversiRpKeBitcoin from './component/KonversiRpKeBitcoin';
import TabelHargaBitcoin from './component/TabelHargaBitcoin';


class App extends Component {
  render() 
  {
    return (

      <div>
            <Route exact path ="/" component={TabelHargaBitcoin}/>
            <Route path="/tabelhargabitcoin" component={TabelHargaBitcoin}/>
            <Route path="/konversirupiahkebitcoin" component={KonversiRpKeBitcoin}/>
            <Route path="/konversibitcoinkerupiah" component={KonversiBitcoinkeRp}/>
       </div>
    );
  }
}

export default App;
