const Footer = () => {
  return (
    <div className=" bg-black text-base-content md:p-10 p-3 ">
      <footer className="md:w-[1300px] pb-5 text-[#A1A1AA] footer sm:footer-horizontal mx-auto border-b-2 border-[#A1A1AA]  ">
        <aside>
          <h2 className="text-2xl text-white font-semibold">
            CS — Ticket System
          </h2>
          <p className="md:w-[400px]">
            CS — Ticket System is a powerful platform designed to help
            businesses manage customer queries efficiently, track support
            tickets, and provide timely resolutions.
          </p>
        </aside>
        <nav>
          <h6 className="text-xl text-white">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <p className="text-center py-3 text-[#A1A1AA]  ">
        Copyright © {new Date().getFullYear()} - All right reserved by Shafrin
        Akter
      </p>
    </div>
  );
};

export default Footer;
