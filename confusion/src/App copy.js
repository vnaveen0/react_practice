import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import TimelineChart from './components/TimelineComponent';
function App() {
  return (
    <div>
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>  
    </Navbar>
    <Menu />
    <TimelineChart />
    </div>
  );
}

export default App;
