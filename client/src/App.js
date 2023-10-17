import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
