import { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tikest = ({
  tickets,
  inProgressTickets,
  resolvedTickets,
  onAddToProgress,
  onComplete,
}) => {
  const tickesDatas = use(tickets);


  const resolvedIds = resolvedTickets.map((t) => t.id);
  const customerTickets = tickesDatas.filter(
    (t) => !resolvedIds.includes(t.id)
  );

  return (
    <div className="md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

        <div>
          <h3 className="text-2xl font-bold mb-5">Customer Tickets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customerTickets.map((ticket) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                onCardClick={onAddToProgress}
              ></Ticket>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-1">Task Status</h3>
          <p className="text-sm text-gray-500 mb-6">
            Select a ticket to add to Task Status
          </p>


          {inProgressTickets.length > 0 && (
            <div className="flex flex-col gap-3 mb-6">
              {inProgressTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                >
                  <span className="font-semibold text-sm text-gray-800">
                    {ticket.title}
                  </span>
                  <button
                    onClick={() => onComplete(ticket)}
                    className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          )}

        
          <h4 className="text-xl font-bold mb-3">Resolved Task</h4>
          {resolvedTickets.length > 0 ? (
            <div className="flex flex-col gap-3">
              {resolvedTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-green-50 border border-green-200 rounded-lg p-4"
                >
                  <span className="font-semibold text-sm text-green-700">
                    {ticket.title}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">No resolved tasks yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tikest;
