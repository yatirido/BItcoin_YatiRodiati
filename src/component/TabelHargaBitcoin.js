import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TabelHargaBitcoin extends Component 
{
  state =
  {  
    buy : '',
    sell : ''
  }

componentDidMount()
{
  axios.get('https://blockchain.info/ticker').then((ambilData) => 
  {  
    console.log(ambilData);  
    this.setState(
      {
        buyAUD: ambilData.data.AUD.buy,
        sellAUD: ambilData.data.AUD.sell,
        buyJPY: ambilData.data.JPY.buy,
        sellJPY: ambilData.data.JPY.sell,
        buyUSD: ambilData.data.USD.buy,
        sellUSD: ambilData.data.USD.sell,
        buyGBP: ambilData.data.GBP.buy,
        sellGBP: ambilData.data.GBP.sell,
        buyEUR: ambilData.data.EUR.buy,
        sellEUR: ambilData.data.EUR.sell
      })
    })
}

render() 
{
  var css = {border:'1px solid black', padding:'12px'} 

  return (
    <div>
        <center>
        <h1>Tabel Harga Bitcoin</h1>
        <table style = {css} >
        <tbody>
            <tr style ={css}>
              <th style={css} >Mata Uang</th>
              <th style={css} >Harga Jual</th>
              <th style={css} >Harga Beli</th>
            </tr>
            <tr style={css} >
              <td style={css} ><strong>Dollar Australia</strong></td>
              <td style={css} >{this.state.sellAUD}</td>
              <td style={css} >{this.state.buyAUD}</td>
            </tr>
            <tr style={css} >
              <td style={css} ><strong>Euro Eropa</strong></td>
              <td style={css} >{this.state.sellEUR}</td>
              <td style={css} >{this.state.buyEUR}</td>
            </tr>
            <tr style={css} >
              <td style={css} ><strong>Poundsterling Inggris</strong></td>
              <td style={css} >{this.state.sellGBP}</td>
              <td style={css} >{this.state.buyGBP}</td>
            </tr>
            <tr style={css} >
              <td style={css} ><strong>Yen Jepang</strong></td>
              <td style={css} >{this.state.sellJPY}</td>
              <td style={css} >{this.state.buyJPY}</td>
            </tr>
            
            <tr style={css} >
              <td style={css} ><strong>Dollar Amerika</strong></td>
              <td style={css} >{this.state.sellUSD}</td>
              <td style={css} >{this.state.buyUSD}</td>
            </tr>
            </tbody>
        </table>

        <br />
        <Link to = "/konversirupiahkebitcoin">Konversi Rupiah ke Bitcoin</Link>
        <br />
        <Link to = "/konversibitcoinkerupiah">Konversi Bitcoin ke Rupiah</Link>

        </center>
      </div>
    );
    }
  }
export default TabelHargaBitcoin;
