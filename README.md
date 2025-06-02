# Crypto Viewer Frontend - Educational Project

This is an educational project built to explore and learn modern web development technologies. The project demonstrates the integration of a React frontend with a backend API, focusing on practical implementation of current tech stack features.

This is the frontend part of the Crypto Viewer project. The backend repository can be found at [crypto-viewer](https://github.com/yourusername/crypto-viewer).

## Learning Objectives

- React with modern hooks and state management
- Integration with RESTful APIs
- Responsive UI design with Ant Design
- Environment configuration and best practices
- Error handling and loading states
- Git workflow and project organization

## Tech Stack

- Frontend: React + Vite
- UI Library: Ant Design
- HTTP Client: Axios
- Backend: REST API ([crypto-viewer](https://github.com/yourusername/crypto-viewer))

## Features

- Dynamic navigation menu
- Item detail view
- Responsive layout
- Loading states
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see [crypto-viewer](https://github.com/yourusername/crypto-viewer) for setup)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/crypto-viewer-frontend.git
cd crypto-viewer-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
VITE_API_URL=http://localhost:8000
```

## Project Structure

```
src/
  ├── components/        # Reusable components
  ├── App.jsx           # Main application component
  └── main.jsx         # Application entry point
```

## Learning Resources

- [React Documentation](https://react.dev/)
- [Ant Design Documentation](https://ant.design/)
- [Vite Documentation](https://vitejs.dev/)

## Contributing

This is an educational project, but if you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
