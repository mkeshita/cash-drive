import React, {useRef, useEffect} from "react";

function TextAnimation() {
  const changingText = [
    "Quick loans",
    "Instant loan offers",
    "Borrow up to 50M",
    "Same day disbursements",
  ];
  let turn = 0;

  const swapText = useRef(null);

  useEffect(() => {
    const interval = setInterval(writeAnim, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  // code to for back space animtion
  const backspaceAnim = () => {
    let text = swapText.current.innerHTML.trim();
    for (let x = 0; x <= text.length; x++) {
      setTimeout(() => {
        swapText.current.innerHTML = text.trim().slice(0, text.length - x);
      }, 150 * x);
    }
  };

  // code to write text animation
  const writeAnim = () => {
    if (swapText.current.innerHTML.trim().length === 0) {
      setTurn();
      const text = changingText[turn];
      for (let i = 0; i < text.length; i++) {
        setTimeout(function () {
          console.log(typeof swapText);
          swapText.current.innerHTML += text[i];
        }, 180 * i);
      }
      delay(150 * changingText[turn].length + 3000, backspaceAnim);
    }
  };

  // code to set and get turn
  const setTurn = () => {
    if (turn < changingText.length - 1) {
      turn++;
    } else {
      turn = 0;
    }
  };

  // delay time before call write and backspace animation
  const delay = (time, action) => {
    setTimeout(function () {
      action();
    }, time);
  };

  return (
    <div className="text-animation">
      <h5 className="hero__title__small" style={{whiteSpace: "nowrap"}}>
        <span className="swap-text" ref={swapText}></span>
        <span style={{fontWeight: 300}} className="blink">
          |
        </span>
      </h5>
    </div>
  );
}

export default TextAnimation;
