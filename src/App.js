import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Product from './components/Product';
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Routes>
      <Route path="" element={ <Home/>}/>
      <Route path="about" element={ <About/> }/>
      <Route path="products/*" element={ <Products/> }>
      <Route path=":id" element={ <Product/> }/>
      </Route>
      <Route path="*" element={<h1>error 404 </h1>}/> 
      
      </Routes>
     
     
     
      
     
    </div>
  );
}

export default App;
