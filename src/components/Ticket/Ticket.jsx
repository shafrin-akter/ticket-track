const statusColors = {
  Open: "bg-green-50 text-green-600",
  "In Progress": "bg-yellow-50 text-yellow-600",
  Resolved: "bg-blue-50 text-blue-600",
};

const dotColors = {
  Open: "bg-green-500",
  "In Progress": "bg-yellow-500",
  Resolved: "bg-blue-500",
};

const priorityColors = {
  High: "text-red-500",
  Medium: "text-yellow-500",
  Low: "text-blue-500",
};

const Ticket = ({ ticket, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick && onCardClick(ticket)}
      className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col gap-3 cursor-pointer hover:shadow-md transition-shadow"
    >
   
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold text-base text-gray-800">{ticket.title}</h3>
        <span
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${statusColors[ticket.status]}`}
        >
          <span
            className={`w-2 h-2 rounded-full inline-block ${dotColors[ticket.status]}`}
          ></span>
          {ticket.status}
        </span>
      </div>


      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
        {ticket.description}
      </p>


      <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
        <span className="font-bold text-gray-700">
          #{ticket.userId}
        </span>
        <span
          className={`font-bold text-[11px] uppercase tracking-wide ${priorityColors[ticket.priority]}`}
        >
          {ticket.priority} Priority
        </span>
        <span className="font-medium">{ticket.customer}</span>
        <span className="flex items-center gap-1 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
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
          {new Date(ticket.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
};

export default Ticket;
