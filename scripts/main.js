document.addEventListener("DOMContentLoaded", () => {
  const API_BASE = "https://fdnd.directus.app/items/person/"

  // Had hier hulp bij van ChatGPT, het kostte meerdere prompts voordat het wilde werken, dit gaat ook de pop-up scripts in de script.js:


  // I have 2 different pop ups. One that shows only the information of id 310 (which is me). This was already 
  // done with the original code I sent you. The other pop up should show a random other persons information which 
  // is with an id between 279 and 325. So we should have new document.getElementById for the other people. The 
  // following code already works for the first pop-up, we might need to change the url so that we can use the same 
  // one for my pop up and the other persons popup 

  //alright. the html is now set up correctly. Please add a console log for what id has been chosen for the other 
  //person. Plus we should have references to those html ids so that we can fill them with the current information 
  //from the database

  //Something is still going wrong. I now at least see some of the content. But I am getting errors and my own pop up 
  //is now different. On my own pop up it now only shows my favGame, instead of favoriteGames. And when clicking the 
  //1 or 2 button is does correctly go randomly between different people. But I am getting the following error

  // Great that worked. Now lets try to add a bit more. When the player presses the 1 or 2 button it should make the 
  // pop up appear with a random id (this already works). But when the pop up is already active and the player presses 
  // 1, the id that shows should be one lower than the active one. When the player presses 2 it should increase the 
  // active id with 1. But only for popup5, not for my own popup with id 310 obviously

  //Some of the ids give errors, so I wanted to skip them. I already added them to the while. But could you fix that 
  //it actually skips them when cycling through?

  //Alright now I would like to add some random ids to the mix. I want to add 69, 71, 72 and 228
  //No i didnt mean to exclude them. The need to be part of the ids that you CAN see. So they somehow need to be part of the randomizer


  // ----------------------------
  // POP-UP 1 — ME (ID 310)
  // ----------------------------
  loadYourProfile()

  async function loadYourProfile() {
    try {
      const res = await fetch(`${API_BASE}310`)
      const json = await res.json()
      if (!json?.data) return

      const data = json.data

      document.getElementById("name").textContent = data.name ?? "—"
      document.getElementById("nickname").textContent = data.nickname ?? "—"
      document.getElementById("birthdate").textContent = data.birthdate ?? "—"

      const gamesEl = document.getElementById("favorite-games")
      gamesEl.innerHTML = ""

      let custom = {}
      try {
        custom = JSON.parse(data.custom)
      } catch { }

      if (Array.isArray(custom.favoriteGames)) {
        const ul = document.createElement("ul")

        custom.favoriteGames.forEach(game => {
          const li = document.createElement("li")
          li.textContent = `${game.title} — ${game.platform} (${game.releaseYear})`
          ul.appendChild(li)
        })

        gamesEl.appendChild(ul)
      } else {
        gamesEl.textContent = "No favorite games listed."
      }

    } catch (err) {
      console.error("Fetch error (you):", err)
    }
  }

  // ----------------------------
  // POP-UP 2 — OTHER PEOPLE
  // ----------------------------
  window.loadOtherPerson = async function (id) {
    console.log("Other person ID chosen:", id)

    try {
      const res = await fetch(`${API_BASE}${id}`)
      const json = await res.json()
      if (!json?.data) return

      const data = json.data

      // Fill popup content
      document.getElementById("other-name").textContent = data.name ?? "—"
      document.getElementById("other-nickname").textContent = data.nickname ?? "No nickname given."
      document.getElementById("other-birthdate").textContent = data.birthdate ?? "No birthdate given."

      const favGameEl = document.getElementById("other-fav-game")
      favGameEl.textContent = data.fav_game ?? "No favorite game listed."

      // 🎨 CHANGE CONTROLLER LIGHT COLOR
      if (data.fav_color) {
        document.documentElement.style.setProperty(
          "--wii-controller-light",
          data.fav_color
        )
        console.log("Controller light color set to:", data.fav_color)
      }

    } catch (err) {
      console.error("Fetch error (other):", err)
    }
  }
})
