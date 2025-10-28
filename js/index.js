// main.js
async function loadComponent(id, file) {
  const el = document?.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(`../components/${file}`);
    const html = await res.text();
    el.innerHTML = html;

    // 👇 If it's the header, initialize its logic
    if (file === "header.html") {
      initHeader();
    }
  } catch (err) {
    console.error(`Error loading ${file}:`, err);
  }
}

function initHeader() {
  const menuBtn = document?.getElementById("menu-btn");
  const navMenu = document?.getElementById("nav-menu");
  const menuIcon = document?.getElementById("menu-icon");

  if (!menuBtn || !navMenu || !menuIcon) {
    console.warn("Header elements not found");
    return;
  }

  // ✅ Toggle mobile nav
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });

  // ✅ Highlight active link
  const currentPath = window.location.pathname.split("/").pop();
  document?.querySelectorAll(".nav-link").forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("text-red-600", "font-semibold");
      link.classList.remove("text-gray-600");
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
});



function toggleFaq(button) {
    console.log("FAQ button clicked", button);
            const faqItem = button.parentElement;
            const allFaqItems = document?.querySelectorAll('.faq-item');
            
            // Close all other items
            allFaqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current item
            faqItem.classList.toggle('active');
        }

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
