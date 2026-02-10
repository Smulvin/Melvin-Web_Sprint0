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
  console.log("Rotate clockwise");
});

// Rotate counterclockwise on double-click -
minusBtn?.addEventListener("dblclick", () => {
  rotateElement(wii, "rotate-counterclockwise");
  console.log("Rotate counterclockwise");
});

// =======================
// Dark mode Toggle
// =======================

const aBtn = document.getElementById("BtnA");

aBtn.addEventListener("click", () => {
    console.log("Dark mode toggled");
    document.body.classList.toggle("dark-mode");
});

// =======================
// D-pad styling
// =======================

const dpad = document.getElementById("wii_direction_buttons");
const buttons = {
  BtnTop: document.getElementById("BtnTop"),
  BtnLeft: document.getElementById("BtnLeft"),
  BtnRight: document.getElementById("BtnRight"),
  BtnBottom: document.getElementById("BtnBottom")
};

Object.keys(buttons).forEach(id => {
  const btn = buttons[id];

  const removePressedClasses = () => {
    dpad.classList.remove("top-pressed", "left-pressed", "right-pressed", "bottom-pressed");
  };

  btn.addEventListener("mousedown", () => {
    removePressedClasses(); // Clear any previous state
    switch (id) {
      case "BtnTop":
        dpad.classList.add("top-pressed");
        break;
      case "BtnLeft":
        dpad.classList.add("left-pressed");
        break;
      case "BtnRight":
        dpad.classList.add("right-pressed");
        break;
      case "BtnBottom":
        dpad.classList.add("bottom-pressed");
        break;
    }
  });

  // Remove pressed classes when button is released
  btn.addEventListener("mouseup", removePressedClasses);
  btn.addEventListener("mouseleave", removePressedClasses);
});

// =======================
// 1 / 2 Buttons for POP-UP5
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("Btn1");
  const btn2 = document.getElementById("Btn2");
  const popup = document.getElementById("pop-up5");

  if (!btn1 || !btn2 || !popup) return;

  let currentOtherId = null; // Tracks the currently shown ID
  let popupActive = false;    // Tracks if popup is open

  // IDs to skip (cause errors or are yourself)
  const excludedIds = [310, 281, 282, 294, 317, 319, 323];

  // Additional IDs to include in the mix
  const additionalIds = [69, 71, 72, 228];

  // Allowed IDs for random or cycling
  const allowedIds = [
    ...Array.from({ length: 325 - 279 + 1 }, (_, i) => i + 279), // 279–325
    ...additionalIds,
  ].filter(id => !excludedIds.includes(id)); // only remove excluded ones

  function getRandomId() {
    const index = Math.floor(Math.random() * allowedIds.length);
    return allowedIds[index];
  }

  function getNextId(currentId) {
    let index = allowedIds.indexOf(currentId);
    if (index === -1) index = 0; // fallback
    index = (index + 1) % allowedIds.length;
    return allowedIds[index];
  }

  function getPrevId(currentId) {
    let index = allowedIds.indexOf(currentId);
    if (index === -1) index = 0; // fallback
    index = (index - 1 + allowedIds.length) % allowedIds.length;
    return allowedIds[index];
  }

  function showOtherPerson(id) {
    currentOtherId = id; // update current ID
    popupActive = true;  // mark popup as active
    loadOtherPerson(id);
    popup.showPopover();
    console.log("Showing other person ID:", id);
  }

  btn1.addEventListener("click", () => {
    const newId = popupActive && currentOtherId !== null ? getPrevId(currentOtherId) : getRandomId();
    showOtherPerson(newId);
  });

  btn2.addEventListener("click", () => {
    const newId = popupActive && currentOtherId !== null ? getNextId(currentOtherId) : getRandomId();
    showOtherPerson(newId);
  });
});





