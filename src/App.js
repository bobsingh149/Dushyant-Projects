import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
