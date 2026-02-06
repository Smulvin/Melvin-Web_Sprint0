document.addEventListener("DOMContentLoaded", () => {

  const apiURL = "https://fdnd.directus.app/items/person/310";

  // Popup elements
  const nameEl = document.getElementById("name");
  const ageEl = document.getElementById("age");
  const interestsEl = document.getElementById("interests");

  // Safety check
  if (!nameEl || !ageEl || !interestsEl) {
    console.error("Popup elements not found");
    return;
  }

  // Fetch data
  fetchJson(apiURL).then(json => {
    console.log("API response:", json);

    if (!json || !json.data) return;

    nameEl.textContent = json.data.name;
    ageEl.textContent = json.data.birthdate;
    interestsEl.textContent = json.data.interests;
  });

  // Fetch helper
  async function fetchJson(url, payload = {}) {
    try {
      const response = await fetch(url, payload);
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

});
