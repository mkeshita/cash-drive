import Navbar from "./components/Navbar"
import {Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import './App.scss';


function App() {
  return (
    <>
      <Navbar />
      <Route path='/' exact  component={Home} />
      <Route path='/about'  component={About} />
    </>
  );
}

export default App;
