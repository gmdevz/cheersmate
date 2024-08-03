import { useState } from "react";
import Board from "./components/Board";
import Drink from "./components/Drink";

function App() {
	const [isDrink, setIsDrink] = useState();
	return (
		<div className="bg-slate-800 min-h-screen w-full flex justify-center items-center">
			<div className="w-full">
				{isDrink ? (
					<Drink setTheDrink={setIsDrink} />
				) : (
					<Board setTheDrink={setIsDrink} />
				)}
			</div>
		</div>
	);
}

export default App;
