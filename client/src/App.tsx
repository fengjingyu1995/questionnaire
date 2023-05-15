import './App.css';
import Home from './pages/Home';
import Complete from './pages/Complete';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </Router>
  );
}

export default App;
