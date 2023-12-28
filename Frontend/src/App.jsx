import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import ImageMain from './components/ImageMain.jsx';
import Home from './components/Home.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/text" element={<Main />} />
        <Route path="/image" element={<ImageMain />} />
      </Routes>
    </Router>
  );
}

export default App;
