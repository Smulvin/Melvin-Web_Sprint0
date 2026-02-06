// =======================
// Power button logic
// =======================
const closeBtn = document.getElementById("closeBtn");
const closeSfx = document.getElementById("closeSfx");

if (closeBtn && closeSfx) {
  closeBtn.addEventListener("click", () => {
    closeSfx.currentTime = 0;
    closeSfx.volume = 0.3;
    closeSfx.play();

    closeSfx.onended = () => {
      window.close();
    };
  });
}

// =======================
// Button references
// =======================
const btnTop = document.getElementById("BtnTop");
const btnLeft = document.getElementById("BtnLeft");
const btnRight = document.getElementById("BtnRight");
const btnBottom = document.getElementById("BtnBottom");

const buttons = [btnTop, btnLeft, btnRight, btnBottom];

// =======================
// Popup references
// =======================
const popUps = [
  document.getElementById("pop-up1"),
  document.getElementById("pop-up2"),
  document.getElementById("pop-up3"),
  document.getElementById("pop-up4"),
];

let activePopup = null;

// =======================
// Helper functions
// =======================
function hideAllPopups() {
  popUps.forEach(popup => {
    if (!popup) return;

    popup.classList.remove("pop-up_active");
    popup.classList.add("pop-up_inactive");
  });

  activePopup = null;
}

function togglePopup(popup) {
  if (!popup) return;

  // Same popup → close
  if (activePopup === popup) {
    popup.classList.remove("slide-fwd-left");
    hideAllPopups();
    return;
  }

  // Close others
  hideAllPopups();

  // Show popup
  popup.classList.remove("pop-up_inactive");
  popup.classList.add("pop-up_active");

  if (popup.id === "pop-up1") {
    popup.classList.remove("slide-fwd-top"); 
    void popup.offsetWidth; 
    popup.classList.add("slide-fwd-top");
  }

  if (popup.id === "pop-up2") {
    popup.classList.remove("slide-fwd-left"); 
    void popup.offsetWidth; 
    popup.classList.add("slide-fwd-left");
  }

  if (popup.id === "pop-up3") {
    popup.classList.remove("slide-fwd-right");
    void popup.offsetWidth;
    popup.classList.add("slide-fwd-right");
  }

  if (popup.id === "pop-up4") {
    popup.classList.remove("slide-fwd-bottom");
    void popup.offsetWidth;
    popup.classList.add("slide-fwd-bottom");
  }

  activePopup = popup;
}


// =======================
// Button event listeners
// =======================
btnTop?.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopup(popUps[0]);
});

btnLeft?.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopup(popUps[1]);
});

btnRight?.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopup(popUps[2]);
});

btnBottom?.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopup(popUps[3]);
});

// =======================
// Close popup when clicking outside
// =======================
document.addEventListener("click", (e) => {
  if (!activePopup) return;

  const clickedButton = buttons.some(btn => btn?.contains(e.target));
  const clickedPopup = activePopup.contains(e.target);

  if (!clickedButton && !clickedPopup) {
    hideAllPopups();
  }
});

// =======================
// Rotate the whole controller
// =======================

// SFX link: https://www.youtube.com/watch?v=psc_A0bUgSQ
const wii = document.querySelector("main");


// Adjust selectors to match your + and - buttons
const plusBtn = document.getElementById("BtnPlus");
const minusBtn = document.getElementById("BtnMinus"); 
const barrelSfx = document.getElementById("barrelSfx");


function rotateElement(element, animationClass) {
  if (!element) return;

  barrelSfx.volume = 0.3;
  barrelSfx.play();

  // Remove both rotate classes
  element.classList.remove("rotate-clockwise", "rotate-counterclockwise");

  // Reset transform to 0
  element.style.transform = "rotate(0deg)";

  // Force reflow to allow animation to replay
  void element.offsetWidth;

  // Add the animation class
  element.classList.add(animationClass);

}



// Rotate clockwise on double-click +
plusBtn?.addEventListener("dblclick", () => {
  rotateElement(wii, "rotate-clockwise");

});

// Rotate counterclockwise on double-click -
minusBtn?.addEventListener("dblclick", () => {
  rotateElement(wii, "rotate-counterclockwise");

});

// =======================
// Dark mode Toggle
// =======================

const aBtn = document.getElementById("BtnA");

aBtn.addEventListener("click", () => {
    console.log("Dark mode toggled");
    document.body.classList.toggle("dark-mode");
});