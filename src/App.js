import './App.css';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import BookingForm from './components/Bookingform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Screen1/>}/>
            <Route path='/summary/:id' element={<Screen2/>}/>
            <Route path='/BookingForm' element={<BookingForm/>}/>
           
          </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
