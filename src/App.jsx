import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
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
			<Analytics />
		</div>
	);
}

export default App;
