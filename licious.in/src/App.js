
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AllRoutes from './Components/Routes/AllRoutes';


function App() {
  return (
    <div className="App">
       <Navbar /> 
       <AllRoutes />
       <Footer />
    </div>
  );
}

export default App;
