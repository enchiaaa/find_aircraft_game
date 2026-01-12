import GameBoard from "./components/game/GameBoard/GameBoard";
import RuleBoard from "./components/game/RuleBoard/RuleBoard";
import "./App.scss"

function App() {
  return (
    <div className="app">
      <span className="title">尋找飛機頭</span>
      <div className="content">
        <div className="left">
          <GameBoard/>
        </div>
        <div className="right">
          <RuleBoard/>
        </div>
      </div>
    </div>
  );
}

export default App;
