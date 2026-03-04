import { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tikest = ({ tickets }) => {
  const tickesDatas = use(tickets);
  return (
    <div className="md:py-8">
      <div>
        <h3 className="text-2xl font-bold">Customer Tickets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {tickesDatas.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket}></Ticket>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Tikest;
