import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

class KonversiRpKeBitcoin extends Component 
{

  state = {};
  
  componentDidMount()
  {
    axios.get('https://blockchain.info/tobtc?currency=USD&value=500').then((ambilData) => 
    {  
      console.log(ambilData); 

      this.setState(
        {
          // Jumlah Bitcoin dengan uang Rp.1
          bcforrp1 : (ambilData.data)/(500*14000)
        })
    })
  }

  klik()
  {
   var inputRp = this.refs.input.value ;
   var output = (inputRp * this.state.bcforrp1);
   var outputRound = output.toFixed(6)
   this.setState(
    {
      userInput : inputRp,
      result : outputRound
    })
  }
  render() 

  {
    return (
      <div>
        <center>
          <h1>Konversi Rupiah ke Bitcoin</h1>
          <h4>Kurs 1 USD = Rp 14.000</h4>
          <br />
          <input ref="input" type="number" onInput={()=>{this.klik();}}/>
          <h1>Rp {this.state.userInput} = BTC {this.state.result}</h1>
      
        <br/><br/>
          <br />
          <Link to = "/tabelhargabitcoin">Tabel Harga Bitcoin</Link>
          <br />
          <Link to = "/konversibitcoinkerupiah">Konversi Bitcoin ke Rupiah</Link>
          </center>
      </div>
  );
  }
  } export default KonversiRpKeBitcoin;

