import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/footer";


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
       </div>
   
   <div id="services">
      <Services/>
   </div>
   <div id="blogs">
    <Blogs/>

   </div>
   <div id="contact">

   <Contact/>
   </div>
   <div id="footer">
     <Footer/>
   </div>
      </main>



    </>
  );
};

export default App;

