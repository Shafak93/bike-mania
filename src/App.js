// import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Login from './Components/Authentication/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/product/:productId' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
