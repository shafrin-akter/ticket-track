import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // Click card → add to Task Status (In Progress)
  const handleAddToProgress = (ticket) => {
    const alreadyExists = inProgressTickets.find((t) => t.id === ticket.id);
    if (alreadyExists) {
      toast.warn("This ticket is already in progress!");
      return;
    }
    setInProgressTickets([...inProgressTickets, ticket]);
    toast.success(`"${ticket.title}" added to Task Status!`);
  };

  // Click Complete → remove from Task Status, add to Resolved
  const handleComplete = (ticket) => {
    setInProgressTickets(inProgressTickets.filter((t) => t.id !== ticket.id));
    setResolvedTickets([...resolvedTickets, ticket]);
    toast.success(`"${ticket.title}" has been resolved!`);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="md:-w-[1300px] md:px-10 mx-auto py-8 px-4">
        <Banner
          inProgressCount={inProgressTickets.length}
          resolvedCount={resolvedTickets.length}
        ></Banner>
        <Suspense fallback={"<p> data is loading</P>"}>
          <Tikest
            tickets={tickets}
            inProgressTickets={inProgressTickets}
            resolvedTickets={resolvedTickets}
            onAddToProgress={handleAddToProgress}
            onComplete={handleComplete}
          ></Tikest>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
