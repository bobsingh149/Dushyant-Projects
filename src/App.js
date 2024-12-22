import './App.css';

import PrivacyPolicy from './components/PrivacyPolicy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LinksPage from './components/LinksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
         
        </header>
        <Routes>
          <Route path="/" element={<LinksPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
