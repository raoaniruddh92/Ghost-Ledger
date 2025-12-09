import { Link } from "react-router-dom";
import "./cyberpunk-home.css"; // ⬅ new stylesheet

function Home() {
  return (
    <div className="home-wrapper">
      <div className="scan-lines"></div>

      <h1 className="title">GhostLedger</h1>
      <p className="subtitle">Blockchain security challenges-A collection of all the challenges on different sites you can't play anymore</p>


      <p className="subtitle">Some problems could not be ported because they rely on vulnerabilities that only existed in older versions of Solidity. Some liberty has been taken where the syntax and other compiler features are no longer compatible. </p>
      <p className="subtitle" >This project is fully open source so feel free to contribute,for anything else please email raoaniruddh92@gmail.com</p>

      <Link to="/challenges">
        <button className="enter-btn">ENTER CHALLENGES</button>
      </Link>



      <p className="footer-text">Protocol v1.0 — Unauthorized access is forbidden-d3cod3rd3m0n</p>
    </div>
  );
}

export default Home;
