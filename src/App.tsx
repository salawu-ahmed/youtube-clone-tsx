import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/watch/:id' element={<Watch/>}/>
      </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
