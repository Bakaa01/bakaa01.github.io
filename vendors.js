document.addEventListener("DOMContentLoaded", function() {
    const vendors = [
        {
            name: "Happy Farm Cambodia",
            location: "Siem Reap",
            description: "Sustainable organic farm offering fresh produce and farm tours.",
            image: "images/happy-farm.jpg",
            link: "https://happyandcofarm.com/"
        },
        {
            name: "Khmer Organic Cooperative",
            location: "Phnom Penh",
            description: "A cooperative promoting organic farming with a farm-to-table restaurant.",
            image: "images/khmer-organic.jpg",
            link: "https://khmer-organic.com/"
        },
        {
            name: "La Plantation",
            location: "Kampot",
            description: "Famous for Kampot pepper and organic spices, offering guided tours.",
            image: "images/la-plantation.jpg",
            link: "https://laplantation.com"
        }
    ];

    console.log(vendors);

    const vendorList = document.getElementById("vendor-list");
    vendorList.innerHTML = "";

    vendors.forEach(vendor => {
        let vendorCard = document.createElement("div");
        vendorCard.classList.add("vendor-card");

        vendorCard.innerHTML = `
            <img src="${vendor.image}" alt="${vendor.name}">
            <h3>${vendor.name}</h3>
            <p><strong>Location:</strong> ${vendor.location}</p>
            <p>${vendor.description}</p>
            <a href="${vendor.link}" target="_blank">Visit</a>
        `;
        vendorList.appendChild(vendorCard);
    });
});

