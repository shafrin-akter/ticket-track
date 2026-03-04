const Ticket = ({ ticket }) => {
  console.log(ticket);

  //   {
  //     "id": 13,
  //     "title": "Incorrect Billing Amount",
  //     "description": "Customer billed twice for the same month.",
  //     "customer": "James Jackson",
  //     "priority": "High",
  //     "status": "Resolved",
  //     "createdAt": "2026-03-01T18:00:00Z"
  // }

  return (
    <div>
      <div className="bg-white rounded-lg  shadow-sm p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-sm text-gray-800">{ticket.title}</h3>
          <span className="flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {ticket.status}
          </span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
          {ticket.description}
        </p>

        <div className="flex items-center justify-between mt-2 text-xs">
          <span className="text-gray-500 font-semibold">{ticket.customer}</span>
          <span className="font-bold  text-[10px] uppercase text-red-500">
            {ticket.priority} Priority
          </span>
          <span className="flex items-center gap-1 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
