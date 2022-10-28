import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'contexts/auth-context';
import { apiInit } from './utils/apiClient';

import Layout from 'components/Layout/Layout'

import './App.scss';


apiInit();

const App: React.FC = ()=> {

  return (
    <div className="App">
      <AuthProvider>
         <BrowserRouter>
              <Layout />
         </BrowserRouter>   
      </AuthProvider>
    </div>
  );
}

export default App;
