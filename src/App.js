// import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';
import AddProduct from './Components/AddProduct/AddProduct';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

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
      <Footer></Footer>
    </div>
  );
}

export default App;
