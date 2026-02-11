// =======================
// Power button logic
// =======================
const closeBtn = document.getElementById("close-button")
const closeSfx = document.getElementById("close-sfx")

if (closeBtn && closeSfx) {
  closeBtn.addEventListener("click", () => {
    closeSfx.currentTime = 0
    closeSfx.volume = 0.3
    closeSfx.play()

    closeSfx.onended = () => {
      window.close()
    }
  })
}

// =======================
// D-pad styling
// =======================

const dpad = document.getElementById("wii-direction-buttons")
const buttons = {
  BtnTop: document.getElementById("button-top"),
  BtnLeft: document.getElementById("button-left"),
  BtnRight: document.getElementById("button-right"),
  BtnBottom: document.getElementById("button-bottom")
}

Object.keys(buttons).forEach(id => {
  const btn = buttons[id]

  const removePressedClasses = () => {
    dpad.classList.remove("top-pressed", "left-pressed", "right-pressed", "bottom-pressed")
  }

  btn.addEventListener("mousedown", () => {
    removePressedClasses() // Clear any previous state
    switch (id) {
      case "BtnTop":
        dpad.classList.add("top-pressed")
        break
      case "BtnLeft":
        dpad.classList.add("left-pressed")
        break
      case "BtnRight":
        dpad.classList.add("right-pressed")
        break
      case "BtnBottom":
        dpad.classList.add("bottom-pressed")
        break
    }
  })

  // Remove pressed classes when button is released
  btn.addEventListener("mouseup", removePressedClasses)
  btn.addEventListener("mouseleave", removePressedClasses)
})

// =======================
// Dark mode Toggle
// =======================

const aBtn = document.getElementById("button-a")

aBtn.addEventListener("click", () => {
  console.log("Dark mode toggled")
  document.body.classList.toggle("dark-mode")
})

// =======================
// Rotate the whole controller
// =======================
const wii = document.querySelector("main")


// Adjust selectors to match your + and - buttons
const plusBtn = document.getElementById("button-plus")
const minusBtn = document.getElementById("button-minus")
const barrelSfx = document.getElementById("barrel-sfx")


function rotateElement(element, animationClass) {
  if (!element) return

  barrelSfx.volume = 0.3
  barrelSfx.play()

  // Remove both rotate classes
  element.classList.remove("rotate-clockwise", "rotate-counterclockwise")

  // Reset transform to 0
  element.style.transform = "rotate(0deg)"

  // Force reflow to allow animation to replay
  void element.offsetWidth

  // Add the animation class
  element.classList.add(animationClass)
}

// Rotate clockwise on double-click +
plusBtn?.addEventListener("dblclick", () => {
  rotateElement(wii, "rotate-clockwise")
  console.log("Rotate clockwise")
})

// Rotate counterclockwise on double-click -
minusBtn?.addEventListener("dblclick", () => {
  rotateElement(wii, "rotate-counterclockwise")
  console.log("Rotate counterclockwise")
})

// =======================
// Shake the whole controller
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-button")
  const controller = document.getElementById("shake-animation-div")
  const shakeSfx = document.getElementById("shake-sfx")

  let isLocked = false

  homeBtn.addEventListener("click", () => {
    if (isLocked) return // stop if still in cooldown

    isLocked = true

    controller.classList.remove("controller-shake")
    void controller.offsetWidth
    controller.classList.add("controller-shake")
    shakeSfx.currentTime = 0
    shakeSfx.volume = 0.3
    shakeSfx.play()

    // Unlock after 0.3 seconds
    setTimeout(() => {
      isLocked = false
    }, 600)
  })
})



// =======================
// 1 / 2 Buttons for POP-UP5
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("button-1")
  const btn2 = document.getElementById("button-2")
  const popup = document.getElementById("pop-up-other")

  const defaultLightColor = "#1d95ba" // <-- must match your CSS :root default


  if (!btn1 || !btn2 || !popup) return

  let currentOtherId = null // Tracks the currently shown ID
  let popupActive = false    // Tracks if popup is open

  // IDs to skip (cause errors or are yourself)
  const excludedIds = [310, 281, 282, 287, 294, 317, 319, 323]

  // Additional IDs to include in the mix
  const additionalIds = [69, 71, 72, 228]

  // Allowed IDs for random or cycling
  const allowedIds = [
    ...Array.from({ length: 332 - 279 + 1 }, (_, i) => i + 279), // 279–332
    ...additionalIds,
  ].filter(id => !excludedIds.includes(id)) // only remove excluded ones

  function getRandomId() {
    const index = Math.floor(Math.random() * allowedIds.length)
    return allowedIds[index]
  }

  function getNextId(currentId) {
    let index = allowedIds.indexOf(currentId)
    if (index === -1) index = 0 // fallback
    index = (index + 1) % allowedIds.length
    return allowedIds[index]
  }

  function getPrevId(currentId) {
    let index = allowedIds.indexOf(currentId)
    if (index === -1) index = 0 // fallback
    index = (index - 1 + allowedIds.length) % allowedIds.length
    return allowedIds[index]
  }

  function showOtherPerson(id) {
    currentOtherId = id // update current ID
    popupActive = true  // mark popup as active
    loadOtherPerson(id)
    popup.showPopover()
    console.log("Showing other person ID:", id)
  }


  popup.addEventListener("toggle", () => {
    // If the popup is now CLOSED
    if (!popup.matches(":popover-open")) {
      document.documentElement.style.setProperty(
        "--wii-controller-light",
        defaultLightColor
      )

      popupActive = false
      currentOtherId = null
    }
  })


  btn1.addEventListener("click", () => {
    const newId = popupActive && currentOtherId !== null ? getPrevId(currentOtherId) : getRandomId()
    showOtherPerson(newId)
  })

  btn2.addEventListener("click", () => {
    const newId = popupActive && currentOtherId !== null ? getNextId(currentOtherId) : getRandomId()
    showOtherPerson(newId)
  })
})

// Changing lights according to fav_color in API
document.addEventListener("DOMContentLoaded", () => {
  const controllerLight = document.getElementById("player-light")
})