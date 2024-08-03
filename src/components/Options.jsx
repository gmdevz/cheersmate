import React from "react";

function Options({ changeTheBoardSize, boardOptions }) {
	const options = [
		{
			value: 9,
			text: "3x3",
		},
		{
			value: 16,
			text: "4x4",
		},
	];
	return (
		<div className="p-5 flex justify-between gap-2">
			{options.map(({ value, text, index }) => {
				const isCurrentOption = boardOptions === value;
				return (
					<button
						className="bg-blue-500 w-full py-5 rounded-md text-white disabled:bg-blue-900"
						onClick={() => changeTheBoardSize(value)}
						key={index}
						disabled={isCurrentOption}
					>
						{text}
					</button>
				);
			})}
		</div>
	);
}

export default Options;
