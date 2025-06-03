import React from 'react'
import { Card } from 'antd'

function CryptocurrencyCard({ currencyData }) {
  if (!currencyData) {
    return <div>Select a cryptocurrency to view details</div>;
  }

  const price = Math.round(currencyData.quote.USD.price);
  const priceChange = Math.round(currencyData.quote.USD.percent_change_24h);
  const marketCap = Math.round(currencyData.quote.USD.market_cap);
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <Card title={
        <div className="flex items-center gap-2">
          <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currencyData.id}.png`}/>
          <span>{currencyData.name}</span>
          <span>{currencyData.symbol}</span>
        </div>
      } extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Current price: {price}</p>
        <p>Price change: {priceChange}</p>
        <p>Market cap: {marketCap}</p>
      </Card>
    </div>
  )
}
  
export default CryptocurrencyCard