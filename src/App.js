import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Create/>}></Route>
          <Route exact path="/read" element={<Read/>}></Route>
          <Route exact path="/update" element={<Update/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
