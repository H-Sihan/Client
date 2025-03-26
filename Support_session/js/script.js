document.addEventListener("DOMContentLoaded", () => {
  
  //
  const greetBtn = document.getElementById("greetBtn");
  greetBtn.addEventListener("click", () => {
    const name = prompt("What's your name?");
    if (name) {
      alert(`Hello, ${name}! Nice to meet you.`);
    } else {
      alert("Hello, guest!");
    }
  });

  //
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    contactForm.reset();
  });

  //
  const toggleThemeBtn = document.getElementById("toggleTheme");
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
