import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Header/Navbar.jsx";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:w-[1200px] mx-auto"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
