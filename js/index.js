
import Controls from "./controls.js";
import Timer from "./timer.js";
import {buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay } from "./elements.js";

import Sounds from "./sounds.js"  

const sound = Sounds()

       

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  
  
});

// button Play
buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countDown();
  sound.pressButton()
  
});

// button Pause
buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
  sound.pressButton()
});

// Button Stop
buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  sound.pressButton()
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
  sound.bgAudioStart()
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOff.classList.add("hide");
  buttonSoundOn.classList.remove("hide");
  sound.bgAudioPause()
});

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  
  timer.updateDisplay(newMinutes,0);
  timer.updateMinutes(newMinutes)
  
});
