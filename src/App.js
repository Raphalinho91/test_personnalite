import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Questionnaire from './Pages/Questionnaire';
import Reponse from './Pages/Reponse';
import Charte from './Pages/Charte';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Questionnaire" element={<Questionnaire />} />
          <Route path="/Reponse" element={<Reponse />} />
          <Route path="/Charte" element={<Charte />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;