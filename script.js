const chartInstances = {};

document.addEventListener("DOMContentLoaded", () => {
    setupSidebarToggle();
    setupThemeToggle();
    setupNavLinks();
    createCharts();
});

function setupSidebarToggle() {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!menuToggle || !sidebar || !sidebarOverlay) return;

    menuToggle.addEventListener("click", () => {
        sidebar.classList.add("open");
        sidebarOverlay.classList.add("show");
        menuToggle.setAttribute("aria-expanded", "true");
    });

    sidebarOverlay.addEventListener("click", () => {
        closeSidebar(sidebar, sidebarOverlay, menuToggle);
    });

    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", () => {
            closeSidebar(sidebar, sidebarOverlay, menuToggle);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSidebar(sidebar, sidebarOverlay, menuToggle);
        }
    });
}

function closeSidebar(sidebar, sidebarOverlay, menuToggle) {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
    }
}

function setupThemeToggle() {
    const themeToggle = document.querySelector(".theme-toggle");
    const savedTheme = localStorage.getItem("dashboardTheme") || "dark";

    if (!themeToggle) return;

    applyTheme(savedTheme, themeToggle);

    themeToggle.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";

        applyTheme(nextTheme, themeToggle);
        localStorage.setItem("dashboardTheme", nextTheme);
        updateChartTheme();
    });
}

function applyTheme(theme, themeToggle) {
    const isLightMode = theme === "light";

    document.body.classList.toggle("light-mode", isLightMode);
    themeToggle.textContent = isLightMode ? "☀️" : "🌙";
    themeToggle.setAttribute("aria-label", isLightMode ? "Switch to dark mode" : "Switch to light mode");
}

function setupNavLinks() {
    const navLinks = document.querySelectorAll(".nav-link");
    const pageTitle = document.querySelector(".page-title");

    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (event) => {
            event.preventDefault();

            navLinks.forEach((link) => {
                link.classList.remove("active");
                link.removeAttribute("aria-current");
            });

            navLink.classList.add("active");
            navLink.setAttribute("aria-current", "page");

            if (pageTitle) {
                pageTitle.textContent = navLink.dataset.title || "Dashboard";
            }
        });
    });
}

function createCharts() {
    createRevenueChart();
    createOrdersChart();
}

function getChartTheme() {
    const styles = getComputedStyle(document.body);

    return {
        textColor: styles.getPropertyValue("--text-color").trim(),
        mutedColor: styles.getPropertyValue("--muted-text-color").trim(),
        borderColor: styles.getPropertyValue("--border-color").trim(),
        accentColor: styles.getPropertyValue("--accent-color").trim(),
        positiveColor: styles.getPropertyValue("--positive-color").trim()
    };
}

function createRevenueChart() {
    const revenueCanvas = document.querySelector("#revenueChart");

    if (!revenueCanvas || typeof Chart === "undefined") return;

    const theme = getChartTheme();

    chartInstances.revenue = new Chart(revenueCanvas, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "Revenue",
                    data: [12000, 19000, 15000, 28000, 36000, 48290],
                    borderColor: theme.accentColor,
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: getChartOptions(theme)
    });
}

function createOrdersChart() {
    const ordersCanvas = document.querySelector("#ordersChart");

    if (!ordersCanvas || typeof Chart === "undefined") return;

    const theme = getChartTheme();

    chartInstances.orders = new Chart(ordersCanvas, {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Orders",
                    data: [420, 510, 390, 640, 720, 310, 220],
                    backgroundColor: theme.positiveColor,
                    borderRadius: 8,
                    borderWidth: 0
                }
            ]
        },
        options: getChartOptions(theme)
    });
}

function getChartOptions(theme) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: theme.textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: theme.mutedColor
                },
                grid: {
                    color: theme.borderColor
                }
            },
            y: {
                ticks: {
                    color: theme.mutedColor
                },
                grid: {
                    color: theme.borderColor
                }
            }
        }
    };
}

function updateChartTheme() {
    const theme = getChartTheme();

    Object.values(chartInstances).forEach((chart) => {
        chart.options = getChartOptions(theme);

        if (chart.config.type === "line") {
            chart.data.datasets[0].borderColor = theme.accentColor;
        }

        if (chart.config.type === "bar") {
            chart.data.datasets[0].backgroundColor = theme.positiveColor;
        }

        chart.update();
    });
}