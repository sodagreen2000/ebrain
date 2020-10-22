import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'antd';
import NavBar from './components/NavBar.jsx'
import LeftBar from './components/LeftBar.jsx'
import Main from './components/Main.jsx'
import RightBar from './components/RightBar';
import LogoZone from './components/LogoZone.jsx'
import { ScrollView } from "@cantonjs/react-scroll-view";

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <NavBar></NavBar>
      <div style={{ display: 'flex', flexDirection: 'row', height: '944px' }}>
        <LeftBar></LeftBar>
        <ScrollView style={{ height: '944px' }}>
          <Main></Main>
        </ScrollView>
        <RightBar />
      </div>
    </div>
  );
}

export default App;
