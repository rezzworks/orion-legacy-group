import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/:id" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
