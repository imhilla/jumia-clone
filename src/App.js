import React from 'react';
import './App.css';
import Billboard from './Components/Billboard';
import Header from './Components/Header';
import MiddleImage from './Components/MiddleImage';
import TopSection from './Components/TopSection';

function App() {
  return (
    <div className="App">
       <Billboard />
       <MiddleImage />
       <Header />
       <TopSection />
    </div>
  );
}

export default App;
