document.getElementById("closeBtn").addEventListener("click", () => {
    const sfx = document.getElementById("closeSfx");

    sfx.currentTime = 0;
    sfx.volume = 0.3;
    
    sfx.play();

    sfx.onended = () => {
      window.close();
    };
  });