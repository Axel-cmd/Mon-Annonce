import './App.css';
import { AuthProvider } from './contexts/auth.context';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Login from './pages/Login'
import Register from './pages/Register';
import SearchProduct from './pages/SearchProduct';
import MyProfil from './pages/MyProfil';
import RequireAuth from './components/RequireAuth';
import ResetPassword from './pages/ResetPassword';
import AddProduct from './pages/AddProduct'
import Landing from './pages/Landing';

function App() {
  return (
    <AuthProvider>

      <BrowserRouter>
        <Routes>

          <Route path='/' >

            {/* routes non protégés */}
            <Route index element={<Landing />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />}  />
            <Route path='searchProduct' element={<SearchProduct />} />

            {/* routes protégés */}
            <Route path='myProfil' element={<RequireAuth> <MyProfil /></RequireAuth>} />
            <Route path='resetPassword' element={<RequireAuth><ResetPassword /></RequireAuth>} />
            <Route path='addProduct' element={<RequireAuth><AddProduct /></RequireAuth>} />


          </Route>


        </Routes>
      </BrowserRouter>
      <Container>
        <Outlet />
      </Container>
    </AuthProvider>
  );
}

export default App;
