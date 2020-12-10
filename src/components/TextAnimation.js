import React, {useRef} from 'react';

function TextAnimation() {
  const swapText = useRef(null);
  const changingText = [
    'Quick loans',
    'Instant loan offers',
    'Borrow up to 50M',
    'Same day disbursements',
  ];
  let turn = 0;

  // code to for back space animtion
  const backspaceAnim = () => {
    let time = 150;
    const currentText = changingText[turn];
    for (let x = 0; x <= currentText.length; x++) {
      setTimeout(function () {
        if (swapText.current)
          swapText.current.innerHTML = swapText.current.innerHTML
            .trim()
            .slice(0, currentText.length - x);
      }, time * x);
    }
    delay(time * currentText.length + 1500, writeAnim);
  };

  // code to write text animation
  const writeAnim = () => {
    let time = 180;
    const text = changingText[turn];
    for (let i = 0; i < text.length; i++) {
      setTimeout(function () {
        if (swapText.current) swapText.current.innerHTML += text[i];
      }, time * i);
    }

    delay(time * text.length + 3000, backspaceAnim);
    setTurn();
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

  setTurn();
  delay(3000, backspaceAnim);

  return (
    <div className='text-animation'>
      <h5 className='hero__title__small' style={{whiteSpace: 'nowrap'}}>
        <span className='swap-text' ref={swapText}>
          Quick loans
        </span>
        <span style={{fontWeight: 300}} className='blink'>
          |
        </span>
      </h5>
    </div>
  );
}

export default TextAnimation;
