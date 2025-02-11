function start () {
  // (PART A) GET SPLASH SCREEN 
  let splash = document.getElementById("splash");

  // (PART B) PLAY BGM & REMOVE SPLASH SCREEN AFTER FADE IN
  splash.addEventListener("transitionend", () => {
    document.getElementById("bgm").play(); 
    bgm.volume = 0.2;
    splash.remove();
  });

  // (PART C) GO!
  splash.classList.add("hide");
}
