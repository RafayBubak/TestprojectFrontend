
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar';
import SearchBarComponent from './SearchBarComponent';
import Filters from './Filters';
import MainComponent from './MainComponent';
import ProductList from './ProductList';



function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBarComponent/>
      {/* <Filters /> */}
      <MainComponent />
      {/* <ProductList/> */}
      
      
      
    </div>
  );
}

export default App;
