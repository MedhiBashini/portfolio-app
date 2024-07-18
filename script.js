document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("active");
  });

  // Initialize ScrollReveal
  ScrollReveal().reveal('.home-content', {
      origin: 'top',
      distance: '80px',
      duration: 2000,
      delay: 200
  });

  ScrollReveal().reveal('.home-img', {
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      delay: 400
  });

  // Typed.js for the multiple text animation
  new Typed('.multiple-text', {
      strings: ['Web Developer', 'Graphic Designer', 'Frontend Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
  });
});



function sendMail() {
  const serviceId = "service_332zq7d";
  const templateId = "template_kx6qe89";

  const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
  };

  emailjs.send(serviceId, templateId, params)
      .then(res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully");
      })
      .catch(err => console.log(err));
}
