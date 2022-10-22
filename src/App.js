import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './component/main/main.css'
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/login/Login';
import MainPage from './pages/Main/MainPage';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='/main' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
