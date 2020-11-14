import Navbar from "./components/Nav/Navbar";
import {Route, useLocation} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Faq from "./components/pages/Faq";
import Footer from "./components/Footer/Footer";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar currentPath={location} />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
      <Route path="/how-it-works" component={Work} />
      <Footer />
    </>
  );
}

export default App;
