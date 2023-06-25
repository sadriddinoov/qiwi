import './App.scss';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/home/home';
import Products from './pages/products/products';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './pages/login/login';
import Error from './pages/Error/Error';
import Profile from './pages/profile/profile';
import Update from './components/update/update';
import Product from './pages/product/product';

function App() {
  
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleClick = () => {
    setToken(null);
    navigate('/')
  }


  return (
    
    <div className="App">
    
    
    <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/products' element={<Products/>}/>
    <Route path='/*' element={<Error/>}/>
    <Route  path='/product/:id' element={<Product/>}/>
    <Route path='/profile' element={<Profile/>}>
      <Route  path='update' element={<Update/>}/>
      <Route  path='message' element={<h3 className='route_heading'>Сообщения</h3>}/>
      <Route  path='payment' element={<h3 className='route_heading'>Платежи и счёт</h3>}/>
      <Route  path='settings' element={<button onClick={handleClick} className='route_btn'>Выйти</button>}/>
      <Route  path='business' element={<h3 className='route_heading'>Мой бизнес</h3>}/>
    </Route>
    
    </Routes>
    
    {
      token ? (
        <Routes>
          <Route path='/login'  element={<Error/>}/> 
        </Routes>
      ) : (
        <Routes>
            <Route path='/login' element={<Login/>} />
        </Routes>
      )
    }
    </div>
  )
  }
  export default App;
  