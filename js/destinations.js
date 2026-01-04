const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const destinationCards = document.querySelectorAll(".destination-card");

function filterDestinations() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedRegion = regionFilter.value;

  destinationCards.forEach(card => {
    const name = card.dataset.name;
    const region = card.dataset.region;

    const matchesSearch = name.includes(searchValue);
    const matchesRegion =
      selectedRegion === "all" || region === selectedRegion;

    if (matchesSearch && matchesRegion) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterDestinations);
regionFilter.addEventListener("change", filterDestinations);
