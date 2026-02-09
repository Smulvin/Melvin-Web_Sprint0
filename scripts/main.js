document.addEventListener("DOMContentLoaded", () => {
  const apiURL = "https://fdnd.directus.app/items/person/310";

  const nameEl = document.getElementById("name");
  const nicknameEl = document.getElementById("nickname");
  const birthdateEl = document.getElementById("birthdate");
  const gamesEl = document.getElementById("favoriteGames");

  if (!nameEl || !nicknameEl || !birthdateEl || !gamesEl) return;

  fetch(apiURL)
    .then(res => res.json())
    .then(json => {
      if (!json?.data) return;

      const data = json.data;

      // Basic info
      nameEl.textContent = data.name;
      nicknameEl.textContent = data.nickname ?? "—";
      birthdateEl.textContent = data.birthdate ?? "—";

      // Parse custom JSON
      let custom = {};
      try {
        custom = JSON.parse(data.custom);
      } catch (e) {
        console.error("Custom JSON parse failed", e);
      }

      const games = custom.favoriteGames;

      if (Array.isArray(games) && games.length) {
        const ul = document.createElement("ul");

        games.forEach(game => {
          const li = document.createElement("li");
          li.textContent = `${game.title} — ${game.platform} (${game.releaseYear})`;
          ul.appendChild(li);
        });

        gamesEl.appendChild(ul);
      } else {
        gamesEl.textContent = "No favorite games listed.";
      }
    })
    .catch(err => console.error("Fetch error:", err));
});
