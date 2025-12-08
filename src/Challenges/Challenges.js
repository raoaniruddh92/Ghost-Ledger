import { Link } from "react-router-dom";

function Challenges() {
  return (
    <div className="terminal-wrapper">
      <h1 className="terminal-header">GhostLedger</h1>

      <div className="challenge-list">
        <h2>Intro challenges</h2>
        <div className="terminal-card">
          <h3>Challenge 1</h3>
          <p>Deploy a contract</p>
          <Link to="/challenge1" className="cy-button">
            ▶ Start Challenge 1
          </Link>
        </div>

        <div className="terminal-card">
          <h3>Challenge 2</h3>
          <p>Interact with the smart contract to complete the level.</p>
          <Link to="/challenge2" className="cy-button">
            ▶ Start Challenge 2
          </Link>
        </div>
        <br></br>
        <h2>Lotteries</h2>
        <div className="terminal-card">
          <h3>Challenge 3</h3>
          <p>Guess the random number</p>
          <Link to="/challenge3" className="cy-button">
            ▶ Start Challenge 3
          </Link>
        </div>

        <div className="terminal-card">
          <h3>Challenge 4</h3>
          <p>Guess the random number pt-2</p>
          <Link to="/challenge4" className="cy-button">
            ▶ Start Challenge 4
          </Link>
        </div>

        <div className="terminal-card">
          <h3>Challenge 5</h3>
          <p>Guess the new number</p>
          <Link to="/challenge5" className="cy-button">
            ▶ Start Challenge 5
          </Link>
        </div>
        <div className="terminal-card">
          <h3>Challenge 6</h3>
          <p>Predict the future</p>
          <Link to="/challenge6" className="cy-button">
            ▶ Start Challenge 6
          </Link>
        </div>
        
        
        <h2>Math</h2>

        <div className="terminal-card">
          <h3>Challenge 7</h3>
          <p>Token Bank</p>
          <Link to="/challenge7" className="cy-button">
            ▶ Start Challenge 7
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
