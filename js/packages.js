const priceFilter = document.getElementById("priceFilter");
const durationFilter = document.getElementById("durationFilter");
const packageCards = document.querySelectorAll(".package-card");

function filterPackages() {
  const maxPrice = priceFilter.value;
  const maxDuration = durationFilter.value;

  packageCards.forEach(card => {
    const price = parseInt(card.dataset.price);
    const duration = parseInt(card.dataset.duration);

    const priceMatch =
      maxPrice === "all" || price <= parseInt(maxPrice);

    const durationMatch =
      maxDuration === "all" || duration <= parseInt(maxDuration);

    card.style.display =
      priceMatch && durationMatch ? "block" : "none";
  });
}

priceFilter.addEventListener("change", filterPackages);
durationFilter.addEventListener("change", filterPackages);
