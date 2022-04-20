import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import { GuessProvider } from "./context/GuessContext/GuessContext";

function App() {
	return (
		<GuessProvider>
			<GameGrid />
		</GuessProvider>
	);
}

export default App;
