import {React , Fragment} from 'react';
import './App.css';

import {Routes , Route} from 'react-router-dom'

import Navbar from './components/Navbar.jsx';
import { useState, useEffect } from "react";

import Footer from './components/Footer';
import Home from './components/pages/Home';
import BookTable from './components/pages/BookTable';
import Store from './deligt_store/Store';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Confirmation from './components/pages/Confirmation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

function App() {

  
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
              console.log("uid", uid)
              setLoggedIn((prev) => (true));
          } else {
            // User is signed out
            // ...
              console.log("user is logged out")
              setLoggedIn((prev) => (false));
          }
        });
       
  }, [])
  return (
    <div className="App">

      

      <Routes>
        <Route exact path="/" element={<Fragment><Navbar loggedIn={loggedIn} hp={true} /> <Home /><Footer /></Fragment>} />
        <Route path="/booktable" element={<Fragment><Navbar loggedIn={loggedIn}  /> <BookTable /><Footer /></Fragment>} />
        <Route path="/store" element={<Fragment> <Store /> <div className='border-b-golden border-b-[1px]'/> <Footer /></Fragment>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/confirmation" element={<Fragment><Navbar/><Confirmation/><Footer/></Fragment>}/>
      </Routes>

    </div>
  );
}

export default App;
