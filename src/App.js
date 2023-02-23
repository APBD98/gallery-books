import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/login/Login';
import MainPage from './pages/Main/MainPage';
import Register from './pages/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='/main' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
