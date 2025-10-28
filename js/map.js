  document.addEventListener("DOMContentLoaded", () => {
    // Initialize map
    const map = L.map("odu-map").setView([9.082, 8.6753], 6); // Center on Nigeria

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Example markers
    const locations = [
      { name: "Farm - Kaduna", coords: [10.5, 7.4] },
      { name: "Testing Hub - Lagos", coords: [6.5244, 3.3792] },
      { name: "Research Hub - Enugu", coords: [6.4527, 7.5103] },
    ];

    locations.forEach((loc) => {
      L.marker(loc.coords)
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b>`)
        .openPopup();
    });
  });