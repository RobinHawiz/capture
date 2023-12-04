//Import pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Route, Routes, useLocation } from "react-router-dom";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//Animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route path="/ourwork" exact element={<OurWork />} />
          <Route path="/ourwork/:id" exact element={<MovieDetail />} />
          <Route path="/contactus" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
