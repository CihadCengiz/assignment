import React from 'react';
import './App.css';
import ListBook from './components/BookList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FindBook from './components/FindBook';

function App() {
  return (
    //React-router
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<ListBook />} />
          <Route path='/findbook' element={<FindBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
