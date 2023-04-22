import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './routes/Home'
import Experience from "./routes/Experience";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exp" element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
