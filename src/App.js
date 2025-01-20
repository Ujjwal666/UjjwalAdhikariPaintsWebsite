import TestPrep from './Components/TestPrep/TestPrep';
import Home from './Components/Home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-prep" element={<TestPrep />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
