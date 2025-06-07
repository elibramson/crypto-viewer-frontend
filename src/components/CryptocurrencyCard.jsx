import React from 'react';
import { Card, Image } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const CryptocurrencyCard = ({ currencyData, isFavorite, onToggleFavorite }) => {
  if (!currencyData) return null;

  const { name, symbol, quote } = currencyData;
  const { USD } = quote || {};
  const { price, percent_change_24h, market_cap } = USD || {};

  const marketCapInBillions = market_cap ? market_cap / 1000000000 : 0;
  const formattedMarketCap = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(marketCapInBillions);

  const priceChangeColor = percent_change_24h >= 0 ? 'text-green-500' : 'text-red-500';
  const priceChangePrefix = percent_change_24h >= 0 ? '+' : '';
  const formattedPriceChange = `${priceChangePrefix}${percent_change_24h?.toFixed(2) || '0.00'}%`;

  return (
    <Card
      className="w-full max-w-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      headStyle={{
        background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      }}
      title={
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currencyData.id}.png`}
              alt={name}
              width={32}
              height={32}
              preview={false}
              className="rounded-full"
            />
            <div>
              <h2 className="text-white text-xl font-semibold m-0">{name}</h2>
              <span className="text-gray-300 text-sm">{symbol.toUpperCase()}</span>
            </div>
          </div>
          <button
            onClick={onToggleFavorite}
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
          >
            {isFavorite ? <StarFilled className="text-2xl" /> : <StarOutlined className="text-2xl" />}
          </button>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-gray-600 text-sm mb-1">Current Price</div>
          <div className="text-2xl font-bold text-gray-900">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).format(price || 0)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-gray-600 text-sm mb-1">24h Change</div>
            <div className={`text-lg font-semibold ${priceChangeColor}`}>
              {formattedPriceChange}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-gray-600 text-sm mb-1">Market Cap</div>
            <div className="text-lg font-semibold text-gray-900">
              {formattedMarketCap}B
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CryptocurrencyCard;