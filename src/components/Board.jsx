import { useState } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import generateBoard from "../utils/generateBoard";
import Options from "./Options";

const updateBoardStyle = (value) => {
  if (value === 16) {
    return "grid-cols-4";
  } else if (value === 9) {
    return "grid-cols-3";
  }

  return "grid-cols-4";
};

export default function Board({ setTheDrink }) {
  const boardOption = parseInt(window.localStorage.getItem("boardOption") || 16);
  const [board, setBoard] = useState(generateBoard(parseInt(boardOption)));
  const [boardStyle, setBoardStyle] = useState(updateBoardStyle(boardOption));
  // const [title, setTitle] = useState("");
  // const [emoji, setEmoji] = useState("");

  // const emojiArr = ["🫨", "🍻", "🥳", "🤯", "😂", "😅"];

  const handleSelect = (index) => {
    if (board[index] === 0) {
      const updatedBoard = [...board];
      updatedBoard[index] = -1;
      setBoard(updatedBoard);

      // setEmoji(emojiArr[index]);
      // setEmoji(emojiArr[Math.floor(Math.random() * emojiArr.length)]);
    } else {
      // setEmoji();
      // setTitle("🍻SHOT MO🍻");
      setTheDrink(true);
    }

    console.log(board);
  };

  const changeBoard = (value) => {
    setBoard(generateBoard(value));
    setBoardStyle(updateBoardStyle(value));

    window.localStorage.setItem("boardOption", value.toString());
  };

  return (
    <>
      <Options changeTheBoardSize={changeBoard} boardOptions={boardOption} />
      <div>
        {/* Board component code goes here */}
        <div className={`${boardStyle} grid gap-2 p-5`}>
          {board.map((value, index) => {
            return (
              <div
                key={index}
                className="w-full h-36 grid place-content-center"
                onClick={() => handleSelect(index)}
              >
                {value >= 0 && (
                  <CiBeerMugFull className="text-5xl text-yellow-600" />
                )}
              </div>
            );
          })}
        </div>
        {/* Result component */}
        {/**  <div>
				<h2 className="text-white text-center text-4xl">{emoji || title}</h2>
			</div> */}
      </div>
    </>
  );
}
