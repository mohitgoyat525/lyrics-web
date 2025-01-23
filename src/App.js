
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './index.css';
import Home from './view/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
