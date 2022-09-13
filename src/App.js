import ZakaziServis from './pages/ZakaziServis';
import Kontakt from './pages/Kontakt';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ZakaziServis />} />
          <Route path="kontakt" element={<Kontakt />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
