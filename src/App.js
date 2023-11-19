import './App.css';
import React from "react";
import Home from './pages/Home/Home';
import Suit from './pages/Suit/Suit';
import Outer from './pages/Outer/Outer';
import Top from './pages/Top/Top';
import Knit from './pages/Knit/Knit';
import Shirt from './pages/Shirt/Shirt';
import Pants from './pages/Pants/Pants';
import Shoes from './pages/Shoes/Shoes';
import Acc from './pages/Acc/Acc';
import New from './pages/New/New';
import Discount from './pages/Discount/Discount';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Suit" element={<Suit />} />
            <Route path="/Outer" element={<Outer />} />
            <Route path="/Top" element={<Top />} />
            <Route path="/Knit" element={<Knit />} />
            <Route path="/Shirt" element={<Shirt />} />
            <Route path="/Pants" element={<Pants />} />
            <Route path="/Shoes" element={<Shoes />} />
            <Route path="/Acc" element={<Acc />} />
            <Route path="/New" element={<New />} />
            <Route path="/Discount" element={<Discount />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    );

  }
}

export default App;
