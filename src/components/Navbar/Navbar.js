import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import carticn from "./imgs/cart.svg";
import noticicationicn from "./imgs/notification.svg";
import searchicn from "./imgs/search.svg";
import menuopenicn from "./imgs/menu.svg";
import menucloseicn from "./imgs/close.svg";
import chaticn from "./imgs/chat.svg";
const DefaultNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const switchtoggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="defaultnavbar">
      <div className="wnavbar">
        <div className="navtitle">
          <Link to="/">ARTSY.</Link>
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Marketplace</Link>
            </li>
            <li>
              <Link to="/">Auctions</Link>
            </li>
            <li>
              <Link to="/">Drop</Link>
            </li>
          </ul>
        </div>
        <div className="navicons">
          <img src={searchicn} alt="searchicn" />
          <img src={carticn} alt="carticn" />
          <img src={noticicationicn} alt="noticicationicn" />
        </div>
      </div>
      <div className="mobilenav">
        {!toggle && (
          <div className="navtittle">
            <div className="menu">
              <img src={menuopenicn} alt="menuopenicn" onClick={switchtoggle} />
            </div>
            <div className="navtitle">
              <Link to="/">ARTSY.</Link>
            </div>
            <div className="navicons">
              <img src={searchicn} alt="searchicn" />
              <img src={carticn} alt="carticn" />
            </div>
          </div>
        )}
        {toggle && (
          <div className="openmnavlink">
            <div className="navtitle">
              <Link to="/">ARTSY.</Link>
            </div>
            <img src={menucloseicn} alt="menucloseicn" onClick={switchtoggle} />
          </div>
        )}
        {toggle && (
          <div className="linkchat">
            <div className="navlinks">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Marketplace</Link>
                </li>
                <li>
                  <Link to="/">Auctions</Link>
                </li>
                <li>
                  <Link to="/">Drop</Link>
                </li>
              </ul>
            </div>
            <div className="chat">
            <img src={chaticn} alt="chaticn" id="chat" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultNavbar;
