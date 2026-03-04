const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="max-w-[1300px] mx-auto w-full flex items-center">
        {/* Left - Logo */}
        <div className="flex-1 lg:w-1/2 lg:flex-none">
          <a className="text-base sm:text-xl lg:text-2xl font-bold whitespace-nowrap">
            CS — Ticket System
          </a>
        </div>

        {/* Mobile Center Button */}
        <div className="shrink-0 px-2 lg:hidden">
          <a className="btn btn-sm text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="shrink-0 lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-end gap-4">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <a className="font-semibold">Home</a>
            </li>
            <li>
              <a className="font-semibold">FAQ</a>
            </li>
            <li>
              <a className="font-semibold">Changelog</a>
            </li>
            <li>
              <a className="font-semibold">Blog</a>
            </li>
            <li>
              <a className="font-semibold">Download</a>
            </li>
            <li>
              <a className="font-semibold">Contact</a>
            </li>
          </ul>
          <a className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
