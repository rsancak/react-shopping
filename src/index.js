/* React */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Css */
import 'bootstrap/scss/bootstrap.scss';

/* Layouts */
import Header from './layouts/header/index';
import Footer from './layouts/footer/index';

/* Pages */
import Main from './pages/main/index';
import AboutUs from './pages/about-us/index';
import Shop from './pages/shop/index';
import ContactUs from './pages/contact-us/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Main />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);