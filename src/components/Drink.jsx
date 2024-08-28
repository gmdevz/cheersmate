import { useState, useEffect } from "react";
import { SlRefresh } from "react-icons/sl";
import Lottie from "lottie-react";
import animationData from "../assets/drink.json";

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
          className={`${effect ? "" : "animate-sparkle"}  ${
            effect && "animate-restarting"
          } text-4xl text-white`}
          onClick={() => {
            setEffect(true);
            setTimeout(() => {
              setTheDrink(false);
            }, 1000);
          }}
          onAnimationEnd={() => setEffect(false)}
        />
      </div>
      <div className="h-85vh w-full flex flex-col items-center justify-center space-y-4">
        <div className="w-64 h-64">
          <Lottie animationData={animationData} loop={true} />
        </div>
        {animate && (
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-yellow-400 animate-bounce">
              You DRINK!
            </h1>
            <p className="mt-2 text-xl text-white">Cheers, mate! 🍻</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Drink;
