import React from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single.jsx';
import New from './pages/new/New';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes path='/'>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='users'>
          <Route index element={<List />} />
          <Route path=':userId' element={<Single />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='products'>
          <Route path=':productId' element={<Single />} />
          <Route path='new' element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
