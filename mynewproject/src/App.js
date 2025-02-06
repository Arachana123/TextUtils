import './App.css';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
      <>
        <NavBar title="TextUtils" home="Home" about="About Us" />
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForm heding="Enter the Text to Analyze Below" />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;

NavBar.defaultProps = {
  title: 'Write text here',
  about: 'Write Text Here'
};
