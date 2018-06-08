import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

class KonversiBitcoinKeRp extends Component 
{

  state = {  };
  
  componentDidMount()
  {
    axios.get('https://blockchain.info/tobtc?currency=USD&value=500').then((ambilData) => 
    {  
      console.log(ambilData); 

      this.setState(
        {
          // Harga (dalam Rupiah) untuk 1 Bitcoin
          rpforbc1 : (500*14000)/(ambilData.data)
        })
    })
  }

  klik()
  {
   var inputBC = this.refs.input.value ;
   var output = (inputBC * this.state.rpforbc1);
  
   this.setState(
    {
      userInput : inputBC,
      result : output
    })
  }
  render() 

  {
    return (
      <div>
        <center>
          <h1>Konversi Bitcoin ke Rupiah</h1>
          <h4>Kurs 1 USD = Rp 14.000</h4>
          <br />
          <input ref="input" type="number" onInput={()=>{this.klik();}}/>
          <h1>BTC {this.state.userInput} = Rp {this.state.result}</h1>

          <br/><br/>
          <br />
          <Link to = "/tabelhargabitcoin">Tabel Harga Bitcoin</Link>
          <br />
          <Link to = "/konversirupiahkebitcoin">Konversi Rupiah ke Bitcoin</Link>
        </center>
      </div>
  );
  }
  } export default KonversiBitcoinKeRp;

