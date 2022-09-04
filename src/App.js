// import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Login from './Components/Authentication/Login/Login';
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';
import Signup from './Components/Authentication/Signup/Signup';
import Banner from './Components/Banner/Banner';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
              <UpdateProduct></UpdateProduct>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manageproducts' element={
          <RequireAuth>
              <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/add' element={
          <RequireAuth>
              <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
