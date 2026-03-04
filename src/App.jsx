import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Header/Navbar.jsx";
import Tikest from "./components/Tikets/Tikest.jsx";

// json data load
const ticketData = async () => {
  const res = await fetch("./ticket.json");
  return res.json();
};

const tickets = ticketData();

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:-w-[1300px] md:px-10 mx-auto py-8 px-4">
        <Banner></Banner>
        <Suspense fallback={"<p> data is loading</P>"}>
          <Tikest tickets={tickets}></Tikest>
        </Suspense>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
