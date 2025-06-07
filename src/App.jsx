import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchOutlined, StarOutlined, StarFilled } from '@ant-design/icons';
import { Menu, Spin, Input, Layout, Typography, Badge } from 'antd';
import CryptocurrencyCard from './components/CryptocurrencyCard';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const App = () => {
  // State declarations
  const [navigationItems, setNavigationItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isItemLoading, setIsItemLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([]);

  // API calls
  const fetchNavigationData = () => {
    setIsLoading(true);
    setErrorMessage(null);
    console.log('Fetching navigation data...');
    
    axios.get('http://localhost:8000/cryptocurrencies')
      .then((response) => {
        console.log('Response received:', response.data);
        const responseData = response.data;
        const items = [
          {
            key: 'g1',
            label: 'List of cryptocurrencies',
            type: 'group',
            children: responseData.map(item => ({
              label: item.name,
              key: item.id
            }))
          }
        ];
        setNavigationItems(items);
      })
      .catch((error) => {
        console.error('Error fetching navigation data:', error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchSelectedItemDetails = () => {
    setIsItemLoading(true);
    setErrorMessage(null);
    
    axios.get(`http://localhost:8000/cryptocurrencies/${selectedItemId}`)
      .then((response) => {
        console.log('Response received:', response.data);
        setSelectedItemData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching item details:', error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsItemLoading(false);
      });
  };

  // Event handlers
  const handleItemClick = event => {
    console.log('click ', event);
    setSelectedItemId(event.key);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    // Filter menu items based on search
    const filteredItems = navigationItems[0].children.filter(item =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setNavigationItems([{
      ...navigationItems[0],
      children: filteredItems
    }]);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  // Effects
  useEffect(() => {
    fetchNavigationData();
  }, []);

  useEffect(() => {
    fetchSelectedItemDetails();
  }, [selectedItemId]);

  // Loading and error states
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Error: {errorMessage}
      </div>
    );
  }

  // Render
  return (
    <Layout className="min-h-screen">
      <Header className="bg-white shadow-sm flex items-center justify-between px-4">
        <Title level={3} className="m-0">Crypto Viewer</Title>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search cryptocurrencies..."
            prefix={<SearchOutlined />}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-64"
          />
          <Badge count={favorites.length} className="mr-4">
            <StarFilled className="text-yellow-400 text-xl" />
          </Badge>
        </div>
      </Header>
      <Layout>
        <Sider width={300} className="bg-white">
          <Menu
            onClick={handleItemClick}
            mode="inline"
            items={navigationItems}
            className="h-[calc(100vh-64px)] overflow-auto"
          />
        </Sider>
        <Content className="p-6 bg-gray-50">
          {isItemLoading ? (
            <div className="h-full flex items-center justify-center">
              <Spin size="large" />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <CryptocurrencyCard 
                currencyData={selectedItemData} 
                isFavorite={favorites.includes(selectedItemId)}
                onToggleFavorite={() => toggleFavorite(selectedItemId)}
              />
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;