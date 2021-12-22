import './App.css';
import TicketPage from './components/TicketPage';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
