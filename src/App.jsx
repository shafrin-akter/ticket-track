import "./App.css";
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Header/Navbar.jsx";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:-w-[1300px] md:px-10 mx-auto py-8 px-4">
        <Banner></Banner>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
