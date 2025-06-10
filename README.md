# Bitcoiner - Cryptocurrency Dashboard

A modern React application for tracking cryptocurrency prices and market data.

## Features

- Real-time cryptocurrency price tracking
- Search functionality for cryptocurrencies
- Favorites system to track preferred cryptocurrencies
- Responsive design with modern UI
- Price change indicators with color coding
- Market cap information
- 24-hour price change tracking

## Tech Stack

- React
- Vite
- Ant Design (UI components)
- Tailwind CSS (styling)
- Axios (API calls)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Testing

The project uses Vitest and React Testing Library for testing. The test setup includes:

- Unit tests for components
- Integration tests for component interactions
- Jest DOM matchers for DOM assertions

### Running Tests

To run the tests:
```bash
npm test
```

### Test Structure

Tests are located in `__tests__` directories next to their corresponding components. For example:
- `src/components/__tests__/CryptocurrencyCard.test.jsx`

### Component Data Structure

The `CryptocurrencyCard` component expects the following data structure:

```javascript
{
  id: string,          // Unique identifier for the cryptocurrency
  name: string,        // Full name of the cryptocurrency
  symbol: string,      // Trading symbol (e.g., 'btc')
  quote: {
    USD: {
      price: number,           // Current price in USD
      percent_change_24h: number,  // 24-hour price change percentage
      market_cap: number       // Market capitalization
    }
  }
}
```

### Component Props

The `CryptocurrencyCard` component accepts the following props:

- `currencyData`: Object containing cryptocurrency data (required)
- `isFavorite`: Boolean indicating if the cryptocurrency is in favorites (required)
- `onToggleFavorite`: Function to handle favorite toggling (required)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
