const form = document.getElementById("contact-form");
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const result = document.getElementById("form-result");
message.addEventListener("input", function () {
  counter.textContent = message.value.length + " / 200";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const chosen = form.elements["package"].value;

  if (name.length < 3) {
    result.textContent = "Please enter your full name (at least 3 letters).";
    result.className = "error";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    result.textContent = "Please enter a valid email address.";
    result.className = "error";
    return;
  }
  if (message.value.trim().length < 10) {
    result.textContent = "Your message must be at least 10 characters.";
    result.className = "error";
    return;
  }

  result.textContent = "Thank you " + name + "! Your question about the " + chosen + " package is ready (demo only, nothing is sent).";
  result.className = "success";
  form.reset();
  counter.textContent = "0 / 200";
});
