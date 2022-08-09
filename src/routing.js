import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app/App';
import Welcome from './app/pages/Welcome';
import About from './app/pages/About';
import NotFound from './app/pages/NotFound';
import PCBuild from './app/pages/hardware/PCBuild';
import SleeperPC from './app/pages/hardware/SleeperPC';
import Handhelds from './app/pages/hardware/Handhelds';
import SmartBrace from './app/pages/hardware/SmartBrace';
import ReactiveEngine from './app/pages/software/ReactiveEngine';
import DenoWebAPI from './app/pages/software/DenoWebAPI';

function Routing() {

  const nestedRoutes = (homePath) => {
    return (
      <Route exact path={homePath} element={<App />}>
        <Route path={homePath} element={<Welcome />} />
        <Route path="about-me" element={<About />} />
        <Route path="hardware">
          <Route path="pc-build" element={<PCBuild />} />
          <Route path="sleeper-pc" element={<SleeperPC />} />
          <Route path="handhelds" element={<Handhelds />} />
          <Route path="kinda-smart-watch" element={<SmartBrace />} />
        </Route>
        <Route path="software">
          <Route path="reactive-engine" element={<ReactiveEngine />} />
          <Route path="deno-web-api" element={<DenoWebAPI />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        {nestedRoutes('/')}
        {nestedRoutes('/portfolio')}
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
