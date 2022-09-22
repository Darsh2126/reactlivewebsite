import './App.scss';
import DisplayTime from './components/DisplayTime/DisplayTime';
import Footer from './components/Footer/Footer';
import Forms from './components/Forms/Forms';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Api from './components/API/Api';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/time" element={<DisplayTime/>} />
      <Route path="/forms" element={<Forms/>} />
      <Route path="/api" element={<Api/>} />
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
