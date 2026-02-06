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

  // If same popup → close it
  if (activePopup === popup) {
    hideAllPopups();
    return;
  }

  // Otherwise open requested popup
  hideAllPopups();
  popup.classList.remove("pop-up_inactive");
  popup.classList.add("pop-up_active");
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
