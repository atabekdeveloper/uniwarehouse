import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => navigate('/products'), [navigate]);
  return <h1>Главная</h1>;
};

export { Home };
