import "./Upcoming.css";
import bg from "./Imgs/background.png";
const Upcomingauction = () => {
  return (
    <div className="upcomingauction">
      <h1>See Upcoming Auctions and Exhibitions</h1>
      <img src={bg} alt="Bg" />
      <p id="index">01</p>
      <div className="bgtext">
        <ul>
          <li>MONALISA REDEFINED IN STYLE.</li>
        </ul>
        <br />
        <p>Start on : 08:00 GTS . Monday</p>
        <br />
        <div className="ptext">
          <div className="xclus">
            <p>
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
          </div>

          <div className="ptextseg">
            <a href="/">See More</a>
            <button>Set a reminder</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomingauction;
