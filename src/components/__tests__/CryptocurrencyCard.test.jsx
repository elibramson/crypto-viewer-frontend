import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CryptocurrencyCard from '../CryptocurrencyCard';

describe('CryptocurrencyCard', () => {
  const mockCrypto = {
    id: '1',
    name: 'Bitcoin',
    symbol: 'btc',
    quote: {
      USD: {
        price: 50000,
        percent_change_24h: 5.2,
        market_cap: 1000000000000
      }
    }
  };

  it('renders cryptocurrency information correctly', () => {
    render(
      <CryptocurrencyCard 
        currencyData={mockCrypto}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />
    );
    
    // Check if the name is rendered
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    
    // Check if the symbol is rendered
    expect(screen.getByText('BTC')).toBeInTheDocument();
    
    // Check if the price is rendered
    expect(screen.getByText('$50,000.00')).toBeInTheDocument();
    
    // Check if the price change percentage is rendered
    expect(screen.getByText('+5.20%')).toBeInTheDocument();
  });

  it('renders with negative price change', () => {
    const negativeCrypto = {
      ...mockCrypto,
      quote: {
        USD: {
          ...mockCrypto.quote.USD,
          percent_change_24h: -3.5
        }
      }
    };
    
    render(
      <CryptocurrencyCard 
        currencyData={negativeCrypto}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />
    );
    
    // Check if the negative price change is rendered
    expect(screen.getByText('-3.50%')).toBeInTheDocument();
  });
}); 