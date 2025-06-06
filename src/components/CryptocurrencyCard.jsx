import React from 'react'
import { Card } from 'antd'

function CryptocurrencyCard({ currencyData }) {
  if (!currencyData) {
    return <div>Select a cryptocurrency to view details</div>;
  }

  const price = Math.round(currencyData.quote.USD.price);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
  const priceChange = currencyData.quote.USD.percent_change_24h;
  const formattedPriceChange = `${priceChange > 0 ? '+' : ''}${priceChange.toFixed(2)}%`;
  const priceChangeColor = priceChange >= 0 ? 'text-green-500' : 'text-red-500';
  
  const marketCapInBillions = currencyData.quote.USD.market_cap / 1000000000;
  const formattedMarketCap = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(marketCapInBillions);

  return (
    <div className="p-4">
      <Card 
        title={
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-t-lg">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currencyData.id}.png`} className="w-8 h-8"/>
            <span className="text-white font-semibold">{currencyData.name}</span>
            <span className="text-white/80">{currencyData.symbol}</span>
          </div>
        } 
        style={{ width: 300 }}
        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span className="text-gray-600">Current price:</span>
            <span className="font-semibold text-blue-600">{formattedPrice}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span className="text-gray-600">Price change:</span>
            <span className={`font-semibold ${priceChangeColor}`}>{formattedPriceChange}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span className="text-gray-600">Market cap:</span>
            <span className="font-semibold text-purple-600">{formattedMarketCap}B</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
  
export default CryptocurrencyCard