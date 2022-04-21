import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import { GuessProvider } from "./context/GuessContext/GuessContext";

function App() {
	return (
		<GuessProvider>
			<GameGrid rows={6} columns={5} />
		</GuessProvider>
	);
}

export default App;
