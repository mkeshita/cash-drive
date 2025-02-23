import Navbar from "./components/Nav/Navbar";
import {Route, useLocation} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Faq from "./components/pages/Faq";
import Footer from "./components/Footer/Footer";
import Work from "./components/pages/Work";
import OurPeople from "./components/pages/OurPeople";
import Contact from "./components/pages/Contact";
import "./App.scss";
// import LoginPage from "./components/pages/LoginPage";
import Privacy from "./components/pages/Privacy";
import {TeamProvider} from "./context/TeamContext";

function App() {
  const location = useLocation();
  return (
    <TeamProvider>
      <Navbar currentPath={location} />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/our-people" component={OurPeople} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
      <Route path="/how-it-works" component={Work} />
      <Route path="/privacy-policy" component={Privacy} />
      <Footer location={location.pathname} />
    </TeamProvider>
  );
}

export default App;
