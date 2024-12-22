import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PrivacyPolicy from './components/PrivacyPolicy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const launchUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const LinkCard = ({ title, url, icon }) => (
    <div className="card" onClick={() => launchUrl(url)}>
      <div className="card-content">
        <FontAwesomeIcon icon={icon} className="card-icon" />
        <span className="card-title">{title}</span>
        <FontAwesomeIcon icon={faArrowRight} className="card-arrow" />
      </div>
    </div>
  );

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Project Links</h1>
        </header>
        <div className="container">
          <div className="content">
            <h1 className="title">Cliffhanger</h1>
            <p className="subtitle">Book Social Media</p>
            <p className="author">by Dushyant Singh</p>
            
            <div className="links-container">
              <LinkCard 
                title="Website"
                url="https://www.cliffhanger.in"
                icon={faGlobe}
              />
              <LinkCard 
                title="Android App"
                url="https://drive.google.com/file/d/1Sq32kk-FeASRwzpmBtGiDAnj_x6KZPGL/view?usp=sharing"
                icon={faGooglePlay}
              />
              <LinkCard 
                title="Frontend Repository"
                url="https://github.com/ArtFoliers/barter-frontend"
                icon={faGithub}
              />
              <LinkCard 
                title="Backend Repository"
                url="https://github.com/ArtFoliers/Barter-backend"
                icon={faGithub}
              />
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
