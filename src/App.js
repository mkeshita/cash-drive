import Navbar from "./components/Navbar";
import {Route, useLocation} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Faq from "./components/pages/Faq";
import Footer from "./components/Footer";
import Work from "./components/pages/Work";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar currentPath={location} />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={Faq} />
      <Route path="/how-it-works" component={Work} />
      <Footer />
    </>
  );
}

export default App;
