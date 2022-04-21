import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import { GuessProvider } from "./context/GuessContext/GuessContext";
import { resetGame } from "./functions/settings";

function App() {
	return (
		<>
			<h1>Definitely NOT Wordle</h1>
			<GuessProvider>
				<GameGrid rows={6} columns={5} />
			</GuessProvider>
			<button onClick={resetGame}>Reset</button>
		</>
	);
}

export default App;
