import { Routes, Route, Switch } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import VaowLogin from './components/VaowLogin/VaowLogin';
import Dashboard from './components/dashboard/dashboard';
import CardSection from './components/CardSection/CardSection';
import HomePage from './components/home/HomePage';

// import Router from 'router';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path = "" element={<VaowLogin/>} />
      <Route path = "/home" element = {<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
