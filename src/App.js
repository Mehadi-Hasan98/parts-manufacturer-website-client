import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddProducts from './Pages/Dashboard/AddProducts';
import AddReview from './Pages/Dashboard/AddReview';
import Admin from './Pages/Dashboard/Admin';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase/></RequireAuth>}/>

        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
      <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
      <Route path='payment/:id' element={<Payment></Payment>}></Route>
      <Route path='addreview' element={<AddReview></AddReview>}></Route>
      <Route index element={<MyProfile></MyProfile>}></Route>
      <Route path='makeAdmin' element={<RequireAdmin><Admin></Admin></RequireAdmin>}></Route>
      <Route path='addProducts' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
      <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
      <Route path='manageOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
      </Route>


        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
