// Highlight the current page in the navigation
document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll("nav a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path) {
      links[i].classList.add("active");
    }
  }

  // Simple contact form validation
  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var message = document.getElementById("message");

      if (name && email && message) {
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
          e.preventDefault();
          alert("Please fill in all fields before submitting.");
          return;
        }
        e.preventDefault();
        alert("Thank you, " + name.value + "! Your message has been received.");
        form.reset();
      }
    });
  }
});
