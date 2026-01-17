import { Routes, Route } from 'react-router';
import Homepage from './pages/homepage';
import './index.css';

function App() {
  return (
    <Routes>
      {/* This renders Home.tsx when the URL is "/" */}
      <Route path="/" element={<Homepage />} />
      
      {/* You can easily add more linked pages here later */}
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;