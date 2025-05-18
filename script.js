


const menuIcon = document.querySelector('#menu-icon');
const mobileNav = document.querySelector('#mobile-nav');

menuIcon.onclick = () => {
  // Toggle the 'fa-bars' and 'fa-xmark' classes for the icon
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');

  // Remove or add the 'hidden' class to control visibility
  mobileNav.classList.toggle('hidden');


  // close the mobile nav after clicking a link and cross icon also diappear
  const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-xmark');
    });
  });
};



  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('div');
      const extraText = card.querySelector('.extra-text');
      extraText.classList.toggle('hidden');
      button.textContent = extraText.classList.contains('hidden') ? 'Read More' : 'Read Less';
    });
  });

  
  const aboutBtn = document.getElementById('about-read-more');
  const aboutExtraText = document.querySelector('.extra-about-text');

  aboutBtn.addEventListener('click', () => {
    aboutExtraText.classList.toggle('hidden');
    aboutBtn.textContent = aboutExtraText.classList.contains('hidden') ? 'Read more' : 'Read less';
  });



  
  //click on arrow icon which show on hover above img when i click on it a div open on screen that img show and i also to add more img in that tab

  
 


  
  const cards = document.querySelectorAll('.portfolio-card');
  const modal = document.getElementById('imgModal');
  const modalGallery = document.getElementById('modalGallery');
  const closeModal = document.getElementById('closeModal');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const images = card.getAttribute('data-images').split(',');
      modalGallery.innerHTML = ''; // Clear previous

      images.forEach(src => {
        const img = document.createElement('img');
        img.src = src.trim();
        img.alt = "Gallery Image";
        img.className = "rounded shadow-md w-full object-cover";
        modalGallery.appendChild(img);
      });

      modal.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalGallery.innerHTML = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modalGallery.innerHTML = '';
    }
  });




  document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.element', {
      strings: ["Frontend Developer.", "UI/UX Designer."],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true
    });
  });


 emailjs.init("s7zU1XR6RQFx3S9go"); // Replace with your actual Public Key

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('service_wl4xp6f', 'template_i7als1s', this) // Removed the extra space after the template ID
    .then(function () {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function (error) {
      alert("Failed to send message: " + error.text);
    });
});



