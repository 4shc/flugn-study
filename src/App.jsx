import React from 'react';
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import "./styles/styles.css"
import Home from './views/Home/Home';

function App() {
  return (
    <>
      <Header />
        <Home />
      <Footer />
    </>
  )
}

export default App;