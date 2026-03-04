import twiter from "../../assets/socail-icon/Group.png";
import linkedin from "../../assets/socail-icon/Group1.png";
import facebook from "../../assets/socail-icon/Group2.png";
import email from "../../assets/socail-icon/fi_6244710.png";
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
          <h6 className="text-xl text-white">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Information</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Legal</h6>
          <div className="flex items-center gap-2">
            <img src={twiter} />
            <a className="link link-hover">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-2">
            <img src={linkedin} /> @CS — Ticket System
            <a className="link link-hover"></a>
          </div>
          <div className="flex items-center gap-2">
            <img src={facebook} /> @CS — Ticket System
            <a className="link link-hover"></a>
          </div>
          <div className="flex items-center gap-2">
            <img src={email} /> support@cst.com
            <a className="link link-hover flex items-center"></a>
          </div>
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
