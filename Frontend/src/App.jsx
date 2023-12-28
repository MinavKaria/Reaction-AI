import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import Footer from './components/Footer';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import ImageMain from './components/ImageMain.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/image" element={<ImageMain />} />
      </Routes>
    </Router>
  );
}

export default App;
