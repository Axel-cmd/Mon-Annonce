import './App.css';
import { AuthProvider } from './contexts/auth.context';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Login from './pages/Login'
import Register from './pages/Register';
import Products from './pages/Products';
import MyProfil from './pages/MyProfil';
import RequireAuth from './components/RequireAuth';
import ResetPassword from './pages/ResetPassword';
import AddProduct from './pages/AddProduct'
import Landing from './pages/Landing';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import Profil from './pages/Profil';

function App() {
  return (
    <AuthProvider>
      <Container fluid className='' style={{minHeight: "95vh", padding: "0px"}} >
      
        <BrowserRouter>
          <Header />
          <Routes>

            <Route path='/'>

              {/* routes non protégés */}
              <Route index element={<Landing />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />}  />
              <Route path='products' element={<Products />} />
              <Route path='product/:id' element={<ProductDetail />} />
              <Route path='profil/:id' element={ <Profil />} />
              <Route path='resetPassword' element={<ResetPassword />} />

              {/* routes protégés */}
              <Route path='myProfil' element={<RequireAuth> <MyProfil /></RequireAuth>} />
              <Route path='addProduct' element={<RequireAuth><AddProduct /></RequireAuth>} />

            </Route>


          </Routes>
        </BrowserRouter>

        <Outlet />
      </Container>
      <Footer/>
    </AuthProvider>
  );
}

export default App;
