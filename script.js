document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".hero input");
    const searchButton = document.querySelector(".hero button");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });
});
async function fetchMarkets() {
    try {
        const response = await fetch("markets.json"); // Load market data
        return await response.json();
    } catch (error) {
        console.error("Error fetching market data:", error);
    }
}


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Display search results on `search.html`
async function displaySearchResults() {
    const query = getQueryParam("query");
    if (!query) return;

    const markets = await fetchMarkets();
    const results = markets.filter(market => 
        market.city.toLowerCase().includes(query.toLowerCase()) ||
        market.products.some(product => product.toLowerCase().includes(query.toLowerCase()))
    );

    const resultsContainer = document.getElementById("market-results");
    resultsContainer.innerHTML = results.length ? "" : "<li>No markets found</li>";

    results.forEach(market => {
        const listItem = document.createElement("li");
        listItem.textContent = `${market.name} - ${market.city} (${market.products.join(", ")})`;
        resultsContainer.appendChild(listItem);
    });
}

// Run function only if on `search.html`
if (window.location.pathname.includes("search.html")) {
    displaySearchResults();
}
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

