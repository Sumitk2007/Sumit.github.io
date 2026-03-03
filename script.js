// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact Form Validation
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (name.length < 3) {
        message.textContent = "Name must be at least 3 characters.";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    if (msg.length < 10) {
        message.textContent = "Message must be at least 10 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Message sent successfully!";
    message.style.color = "green";
    form.reset();
});
