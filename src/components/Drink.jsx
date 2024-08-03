import { useState, useEffect } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";

const Drink = ({ setTheDrink }) => {
  const [animate, setAnimate] = useState(false);
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      <div className="grid place-content-center p-5">
        <SlRefresh
          className={`${effect ? "" : "animate-sparkle"}  ${effect && "animate-restarting"} text-4xl text-white`}
          onClick={() => {
            setEffect(true);
            setTimeout(() => {
              setTheDrink(false);
            }, 1000);
          }}
          onAnimationEnd={() => setEffect(false)}
        />
      </div>
      <div className="h-85vh w-full grid place-content-center ">
        {/* Drink content goes here */}
        <CiBeerMugFull
          className="text-5xl text-yellow-600 transition-all duration-1000"
          style={{
            transform: `scale(${animate ? 5 : 1})`,
          }}
          onAnimationEnd={() => setEffect(false)}
        />
      </div>
    </>
  );
};

export default Drink;
