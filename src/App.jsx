import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Spin } from 'antd';
import CryptocurrencyCard from './components/CryptocurrencyCard';

const App = () => {
  // State declarations
  const [navigationItems, setNavigationItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isItemLoading, setIsItemLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState(null);

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

  // Effects
  useEffect(() => {
    fetchNavigationData();
  }, []);

  useEffect(() => {
    fetchSelectedItemDetails();
  }, [selectedItemId]);

  // Loading and error states
  if (isLoading) {
    return <Spin size="large" />;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  // Render
  return (
    <div className="flex">
      <Menu
        onClick={handleItemClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={navigationItems}
        className="h-screen overflow-scroll"
      />
      <div className="mx-auto my-auto">
        {isItemLoading ? (
          <Spin size="large" />
        ) : (
          <CryptocurrencyCard currencyData={selectedItemData} />
        )}
      </div>
    </div>
  );
};

export default App;