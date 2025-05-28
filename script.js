const emailLink = document.querySelector("a[href^='mailto']");
emailLink.addEventListener("click", function () {
  alert("Thanks for reaching out! I'll reply soon.");
});
