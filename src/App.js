import React from 'react';
import Parent from './Component/Home/Parent';
import Topscroll from './Component/Home/Topscroll';
import News from './Component/Pages/News/News';
import Footer from './Component/Home/Footer';
import Author from './Component/Pages/Author/Author'
import { BrowserRouter as Router, Routes, Route, Outlet, } from 'react-router-dom';
import Navbar from './Component/Home/Navbar';
import Authors from './Component/Pages/Author/Authors';
import { useParams } from 'react-router-dom';
import About from './Component/Pages/About/About';
import Contact from './Component/Pages/Contact/Contact';
import CreateNews from './Component/Pages/CreateNews/CreateNews';
import TodoProvider from './TodoProvider';

function App() {
  let {id} = useParams
  return (
    <>
    <TodoProvider>
    <Router>
    <Navbar/>

      <Routes>

        <Route path="/" element={<Parent />} />
        <Route path="/news" element={<News />}/>
        <Route path="/author" element={<Author  />} />

          <Route path='/authors/:id' element={<Authors/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

        
          <Route path='/createnews' element={<CreateNews/>}></Route>

      </Routes>
      <Topscroll/>
      <Footer/>

    </Router>
    </TodoProvider>
    </>
    
  );
}

export default App;
