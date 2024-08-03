import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Analytics } from "@vercel/analytics/react";
import Board from "./components/Board";
import Drink from "./components/Drink";
import beerMugImage from "./assets/beer-mug.png";

function App() {
	const [isDrink, setIsDrink] = useState();

	useEffect(() => {
		const pageAccessedByReload =
			(window.performance.navigation &&
				window.performance.navigation.type === 1) ||
			window.performance
				.getEntriesByType("navigation")
				.map((nav) => nav.type)
				.includes("reload");

		if (pageAccessedByReload) {
			Swal.fire({
				title: "CheersMate",
				text: "The fun web app that turns choosing your next beer into a game! Pick a random beer icon, and if you hit the special one, it's time to take a sip! Perfect for parties and casual hangouts, CheersMate makes every round exciting. Tap, cheer, and enjoy the fun with CheersMate!",
				imageUrl: beerMugImage,
				imageWidth: 200,
				imageHeight: 200,
				imageAlt: "Beer Mug",
				allowOutsideClick: false,
				confirmButtonText: "Cheers 🍻",
			});
		}
	}, []);

	return (
		<div className="bg-slate-800 min-h-screen w-full flex justify-center items-center">
			<div className="w-full">
				{/* <img src="/src/assets/beer-mug.png" alt="cheersmate" /> */}
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
