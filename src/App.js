import {React , Fragment} from 'react';
import './App.css';

import {Routes , Route} from 'react-router-dom'

import Navbar from './components/Navbar.jsx';

import Footer from './components/Footer';
import Home from './components/pages/Home';
import BookTable from './components/pages/BookTable';
import Store from './deligt_store/Store';


function App() {
  return (
    <div className="App">

      

      <Routes>
        <Route exact path="/" element={<Fragment><Navbar /> <Home /></Fragment>} />
        <Route path="/booktable" element={<Fragment><Navbar /> <BookTable /></Fragment>} />
        <Route path="/store" element={<Fragment> <Store /></Fragment>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
