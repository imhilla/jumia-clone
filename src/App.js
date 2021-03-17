import React from 'react';
import './App.css';
import Billboard from './Components/Billboard';
import Header from './Components/Header';
import TopSection from './Components/TopSection';

function App() {
  return (
    <div className="App">
       <Billboard />
       <Header />
       <TopSection />
    </div>
  );
}

export default App;
