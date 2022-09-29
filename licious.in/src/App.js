
import './App.css';
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SimpleSlider from "./Components/Pages/Slider"
import Product from './Components/Pages/Home1';
import Best from "./Components/Pages/BestSeller";
import Carousel from "./Components/Pages/BestSeller"
import Boneless from './Components/Pages/BonelessCuts';
import Explore from "./Components/Pages/Explore";
import Breakfast from "./Components/Pages/Breakfast"
import Footer from "./Components/Pages/Footer";



function App() {
  return (
    <div className="App">

      <Navbar />
      <SimpleSlider />
      <Product />
      <Best />
      <Boneless />
      {/* <Carousel /> */}
      <Explore />
      <Breakfast />
      <Footer />
      {/* <Login/> */}

    </div>
  );
}

export default App;
