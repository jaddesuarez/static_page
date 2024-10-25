// Function to load HTML components dynamically (e.g., navbar, footer, or pages)
function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.log("Error loading component:", error));
}

const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/services": "/pages/services.html",
  "/contact": "/pages/contact.html",
};

// Function to render content based on the route
function renderContent() {
  const path = window.location.pathname;

  // Check if the route exists in the routes object
  if (routes[path]) {
    // Load the corresponding file for the route
    loadComponent("app", routes[path]);
  } else {
    // Load the custom 404 page if the route is not found
    loadComponent("app", "/components/404.html");
  }
}

// Handle navigation without page reload
function navigate(event, path) {
  event.preventDefault();
  window.history.pushState({}, path, window.location.origin + path);
  renderContent();
}

// Initial page load
document.addEventListener("DOMContentLoaded", () => {
  // Load navbar and footer components
  loadComponent("navbar", "/components/navbar.html");
  loadComponent("footer", "/components/footer.html");

  // Render content based on the initial URL
  renderContent();
});

// Listen for back/forward navigation
window.onpopstate = renderContent;

// Add an event listener to the Send Contact Form button
document.getElementById("sendButton").addEventListener("click", function () {
  // Retrieve form values
  console.log("puuuur");
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Validate email format (simple regex)
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Construct the mailto link
  var mailtoLink =
    "mailto:your-email@example.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(
      "Name: " + name + "\n" + "Email: " + email + "\n\n" + message
    );

  // Open the default email client with the pre-filled email
  console.log(mailtoLink);
  window.location.href = mailtoLink;
});
