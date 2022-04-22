import "./App.css";
import Home from "./components/Home/Home";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
	return (
		<SettingsProvider>
			<Home />
		</SettingsProvider>
	);
}

export default App;
