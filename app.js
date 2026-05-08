document.addEventListener("DOMContentLoaded", () => {
  const coffeeListElement = document.getElementById("coffee-names");
  const coffeeDetailsElement = document.getElementById("details-content");

  let allCoffees = [];
  let activeCoffeeId = null;

  async function fetchCoffees() {
    try {
      const response = await fetch("coffees.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      allCoffees = await response.json();
      renderCoffeeList();
      if (allCoffees.length > 0) {
        displayCoffeeDetails(allCoffees[0].id); // Display first coffee by default
      }
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      coffeeDetailsElement.innerHTML = `<p>Error loading coffee recipes. Please try again later.</p>`;
    }
  }

  function renderCoffeeList() {
    coffeeListElement.innerHTML = ""; // Clear existing list
    allCoffees.forEach(coffee => {
      const listItem = document.createElement("li");
      listItem.textContent = coffee.name;
      listItem.dataset.id = coffee.id;
      listItem.addEventListener("click", () => displayCoffeeDetails(coffee.id));
      coffeeListElement.appendChild(listItem);
    });
  }

  function displayCoffeeDetails(id) {
    const coffee = allCoffees.find(c => c.id === id);

    if (coffee) {
      coffeeDetailsElement.innerHTML = `
        <h3>${coffee.name}</h3>
        <p>${coffee.description}</p>
        <h4>How to Make It:</h4>
        <ol>
          ${coffee.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>
      `;
      updateActiveListItem(id);
      activeCoffeeId = id;
    } else {
      coffeeDetailsElement.innerHTML = `<p>Coffee details not found.</p>`;
    }
  }

  function updateActiveListItem(id) {
    const currentActive = coffeeListElement.querySelector(".active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    const newActive = coffeeListElement.querySelector(`[data-id="${id}"]`);
    if (newActive) {
      newActive.classList.add("active");
    }
  }

  fetchCoffees();
});
