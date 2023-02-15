
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar';
import SearchBarComponent from './SearchBarComponent';
import Filters from './Filters';
import Categories from './Categories';
// import ProdCertification from './ProdCertification'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBarComponent/>
      <Filters />
      <Categories text="abc"/>
      {/* <ProdCertification/> */}
      
    </div>
  );
}

export default App;
