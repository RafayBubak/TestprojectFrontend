
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar';
// import SearchBarComponent from './SearchBarComponent';
// import Filters from './Filters';
// import MainComponent from './MainComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContainerComponent from './MainContainerComponent';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/:id" element=
        
            
            {<MainContainerComponent/>}
          
           />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
