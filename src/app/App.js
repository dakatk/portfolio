import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuItems from '../models/Menu.json';
import MainMenu from './menu/MainMenu';
import './App.css';

function App() {
  return (
    <div className="app">
      <MainMenu items={MenuItems} />
      <Outlet />
    </div>
  );
}

export default App;
