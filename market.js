document.addEventListener("DOMContentLoaded", function() {
    const markets = [
        {
            "name": "Phsar Thom Thmey",
            "city": "Phnom Penh",
            "products": ["Vegetables", "Fruits", "Meat"],
            "location": "Phnom Penh, Cambodia",
            "image": "https://cdn.fazwaz-kh.com/nw/fWjdwNCKCmL7QIHrfvd7jphpwvc/520x350/sub-place/4036/central-market.png"
        },
        {
            "name": "Siem Reap Night Market",
            "city": "Siem Reap",
            "products": ["Handmade Goods", "Street Food", "Souvenirs"],
            "location": "Siem Reap, Cambodia",
            "image": "https://www.siemreap.net/wp-content/uploads/2018/01/pub-street-siem-reap-cambodia.jpg"
        },
        {
            "name": "Phsar Nat",
            "city": "Battambang",
            "products": ["Organic Vegetables", "Honey", "Rice"],
            "location": "Battambang, Cambodia",
            "image": "https://c8.alamy.com/comp/ANNYMT/psar-nat-meeting-market-battambang-cambodia-ANNYMT.jpg"
        },
        {
            "name": "Olympic Market",
            "city": "Phnom Penh",
            "products": ["Clothes", "Shoes", "Electronics", "Street Food"],
            "location": "Phnom Penh, Cambodia",
            "image": "https://livingnomads.com/wp-content/uploads/2018/02/22/olympic-market.jpg"
        },
        {
            "name": "Russian Market (Phsar Toul Tom Poung)",
            "city": "Phnom Penh",
            "products":["Handmade Goods", "Clothing", "Antiques", "Food"],
            "location": "Phnom Penh, Cambodia",
            "image": "https://images.realestate.com.kh/files/2023-10/screenshot-2023-10-10-095002.png"
        },
        {
            "name": "Boeng Keng Kang Market",
            "city": "Phnom Penh",
            "products":  ["Organic Vegetables", "Fruit", "Local Snacks", "Spices"],
            "location": "Phnom Penh, Cambodia",
            "image": "https://i.ytimg.com/vi/G21ovuzBnPs/maxresdefault.jpg"
        }
    ];

    const marketList = document.getElementById("market-list");
    marketList.innerHTML = ""; // Clear any existing content

    markets.forEach(market => {
        let marketCard = document.createElement("div");
        marketCard.classList.add("market-card");

        marketCard.innerHTML = `
            <img src="${market.image}" alt="${market.name}" />
            <h3>${market.name}</h3>
            <p><strong>City:</strong> ${market.city}</p>
            <p><strong>Location:</strong> ${market.location}</p>
            <p><strong>Products:</strong> ${market.products.join(", ")}</p>
        `;

        marketList.appendChild(marketCard);
    });
});



