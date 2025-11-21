// main.js

const testimonials = [
    {
        img: "Johnson.jpg",
        name: "Malik Johnson",
        role: "Community Farmer",
        message: "The Odu Project has transformed not just my farming practices, but my entire perspective on sustainable agriculture. The training and community support have been invaluable.",
        rating: 5
    },
    {
        img: "Cruz.jpg",
        name: "Isabella Cruz",
        role: "Weaver",
        message: "For the first time, my craft is being appreciated beyond my village. ODU helped me understand how to preserve and market our traditional skills.",
        rating: 5
    },
    {
        img: "Walker.jpg",
        name: "Ethan Walker",
        role: "Teacher",
        message: "Introducing my students to cultural preservation activities revived their interest in our heritage. This program is a gift to the next generation.",
        rating: 4
    },
    {
        img: "Torres.jpg",
        name: "Alejandro Torres",
        role: "Community Elder",
        message: "ODU gave me a platform to empower young people in my community. We now take pride in our identity and history.",
        rating: 3
    },
    {
        img: "Anderson.jpg",
        name: "Chloe Anderson",
        role: "Agripreneur",
        message: "The farming techniques I learned tripled my harvest. I’ve gained confidence and stability for my family.",
        rating: 5
    },
    {
        img: "Williams.jpg",
        name: "Nia Williams",
        role: "Cultural Researcher",
        message: "This project preserves stories and traditions that would have disappeared. It’s a lighthouse for our heritage.",
        rating: 4
    },
    {
        img: "Miller.jpg",
        name: "Grace Miller",
        role: "Student",
        message: "I joined out of curiosity, but I’ve stayed because it has helped me appreciate where I come from.",
        rating: 5
    },
    {
        img: "Brown.jpg",
        name: "Marcus Brown",
        role: "Local Trader",
        message: "ODU empowered me to turn cultural products into sustainable income. My business has grown steadily.",
        rating: 4
    },
    {
        img: "Hernández.jpg",
        name: "Lucia Hernández",
        role: "Community Volunteer",
        message: "Seeing older women share forgotten stories brings tears to my eyes. ODU is reviving history.",
        rating: 4
    },
    {
        img: "Foster.jpg",
        name: "Caleb Foster",
        role: "Fisherman",
        message: "From record-keeping to sustainable practices, this project has reshaped how my community works.",
        rating: 5
    },
    {
        img: "Robinson.jpg",
        name: "Zoe Robinson",
        role: "Local Craftsman",
        message: "My weaving skills are now recognized and documented. I feel seen and valued.",
        rating: 4
    },
    {
        img: ".jpg",
        name: "Amina Davis",
        role: "Youth Leader",
        message: "We feared our traditions would fade away. ODU has restored our confidence in cultural continuity.",
        rating: 5
    },
    {
        img: ".jpg",
        name: "Santiago Morales",
        role: "Parent",
        message: "My children now understand the value of our traditions. This is the kind of education they don’t teach in schools.",
        rating: 5
    },
    {
        img: ".jpg",
        name: "Chima Eze",
        role: "Local Guide",
        message: "ODU has brought tourism potential back to our community. People come to learn about our culture again.",
        rating: 4
    },
    {
        img: ".jpg",
        name: "Brianna Thompson",
        role: "Community Organizer",
        message: "The sense of unity and purpose this initiative has created is unmatched. We are building something lasting.",
        rating: 5
    },
    {
        img: ".jpg",
        name: "Javier Delgado",
        role: "Entrepreneur",
        message: "I learned how to turn cultural artifacts into modern products without losing their originality.",
        rating: 3
    },
];

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

// Shuffle & pick 3 unique testimonials
function getRandomTestimonials(arr, count = 3) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

const selected = getRandomTestimonials(testimonials, 3);

// Function to generate star icons
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += `
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>`;
    }
    return stars;
}

// Inject into container
const container = document.getElementById("testimonial-container");

container.innerHTML = selected
    .map(t => `
        <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0 overflow-hidden">
                    <img src="../assets/images/${t.img || t.name.replace(/\s+/g, '-').toLowerCase()}" alt="${t.name}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-semibold text-zinc-900 text-sm">${t.name}</h3>
                    <p class="text-gray-600 text-xs">${t.role}</p>
                </div>
            </div>

            <p class="text-gray-700 text-sm leading-relaxed mb-4">
                “${t.message}”
            </p>

            <div class="flex gap-0.5">
                ${generateStars(t.rating)}
            </div>
        </div>
    `)
    .join("");




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
