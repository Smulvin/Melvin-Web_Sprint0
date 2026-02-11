document.addEventListener("DOMContentLoaded", () => {
  const API_BASE = "https://fdnd.directus.app/items/person/"

  // ----------------------------
  // POP-UP 1 — YOU (ID 310)
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
