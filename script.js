const menuIcon = document.querySelector('#menu-icon');
      const mobileNav = document.querySelector('#mobile-nav');

      if (menuIcon && mobileNav) {
        menuIcon.onclick = () => {
          menuIcon.classList.toggle('fa-bars');
          menuIcon.classList.toggle('fa-xmark');
          mobileNav.classList.toggle('hidden');

          const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
          mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
              mobileNav.classList.add('hidden');
              menuIcon.classList.add('fa-bars');
              menuIcon.classList.remove('fa-xmark');
            });
          });
        };
      }

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

      if (aboutBtn && aboutExtraText) {
        aboutBtn.addEventListener('click', () => {
          aboutExtraText.classList.toggle('hidden');
          aboutBtn.textContent = aboutExtraText.classList.contains('hidden') ? 'Read more' : 'Read less';
        });
      }

      const cards = document.querySelectorAll('.portfolio-card');
      const modal = document.getElementById('imgModal');
      const modalGallery = document.getElementById('modalGallery');
      const closeModal = document.getElementById('closeModal');

      if (cards && modal && modalGallery && closeModal) {
        cards.forEach(card => {
          card.addEventListener('click', () => {
            const images = card.getAttribute('data-images').split(',');
            modalGallery.innerHTML = '';
            images.forEach(src => {
              const img = document.createElement('img');
              img.src = src.trim();
              img.alt = "Gallery Image";
              img.className = "rounded shadow-md w-full object-cover mb-2";
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
      }

      document.addEventListener('DOMContentLoaded', function () {
        if (document.querySelector('.element')) {
          new Typed('.element', {
            strings: ["Frontend Developer.", "UI/UX Designer."],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true
          });
        }
      });

      document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm('service_wl4xp6f', 'template_i7als1s', this)
          .then(() => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
          }, (error) => {
            alert("Failed to send message: " + error.text);
          });
      });


      document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      duration: 900,      
      easing: 'ease-out', 
      offset: 80,         
      once: true          

    });
  });