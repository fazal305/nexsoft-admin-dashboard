// Dashboard initialization

document.addEventListener("DOMContentLoaded", () => {
    setupSidebarToggle();
    setupThemeToggle();
    createRevenueChart();
    createOrdersChart();
});

// Setup mobile sidebar open and close behavior

function setupSidebarToggle() {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const navLinks = document.querySelectorAll(".nav-link");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.add("open");
        sidebarOverlay.classList.add("show");
    });

    sidebarOverlay.addEventListener("click", () => {
        closeSidebar(sidebar, sidebarOverlay);
    });

    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", () => {
            closeSidebar(sidebar, sidebarOverlay);
        });
    });
}

// Close mobile sidebar

function closeSidebar(sidebar, sidebarOverlay) {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");
}

// Setup dark and light mode toggle

function setupThemeToggle() {
    const themeToggle = document.querySelector(".theme-toggle");
    const savedTheme = localStorage.getItem("dashboardTheme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const isLightMode = document.body.classList.contains("light-mode");

        themeToggle.textContent = isLightMode ? "☀️" : "🌙";
        localStorage.setItem("dashboardTheme", isLightMode ? "light" : "dark");
    });
}

// Create monthly revenue line chart

function createRevenueChart() {
    const revenueCanvas = document.getElementById("revenueChart");

    new Chart(revenueCanvas, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "Revenue",
                    data: [12000, 19000, 15000, 28000, 36000, 48290],
                    borderWidth: 3,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Create weekly orders bar chart

function createOrdersChart() {
    const ordersCanvas = document.getElementById("ordersChart");

    new Chart(ordersCanvas, {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Orders",
                    data: [420, 510, 390, 640, 720, 310, 220],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}