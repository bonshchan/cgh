document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple form feedback (no backend)
    document.getElementById('formMsg').textContent = "Thank you for contacting us! We'll get back to you soon.";
    this.reset();
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Map card IDs to modal IDs
const cardModalMap = {
  generalMedicineCard: 'modalGeneralMedicine',
  cardiologyCard: 'modalCardiology',
  maternityCard: 'modalMaternity',
  vaccinationsCard: 'modalVaccinations'
};

// Open modal on card click
Object.keys(cardModalMap).forEach(cardId => {
  const card = document.getElementById(cardId);
  const modal = document.getElementById(cardModalMap[cardId]);
  if (card && modal) {
    card.addEventListener('click', () => {
      modal.style.display = 'flex';
      card.setAttribute('aria-pressed', 'true');
    });
  }
});

// Close modal on close button click
document.querySelectorAll('.close-button').forEach(btn => {
  btn.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      // Find the corresponding card and reset aria-pressed
      Object.keys(cardModalMap).forEach(cardId => {
        if (cardModalMap[cardId] === modalId) {
          const card = document.getElementById(cardId);
          if (card) card.setAttribute('aria-pressed', 'false');
        }
      });
    }
  });
});

// Close modal when clicking outside modal content
window.addEventListener('click', e => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
      // Reset all aria-pressed
      Object.keys(cardModalMap).forEach(cardId => {
        const card = document.getElementById(cardId);
        if (card) card.setAttribute('aria-pressed', 'false');
      });
    }
  });
});

// Optional: close modal with Escape key
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => {
      if (modal.style.display === 'flex') {
        modal.style.display = 'none';
        Object.keys(cardModalMap).forEach(cardId => {
          const card = document.getElementById(cardId);
          if (card) card.setAttribute('aria-pressed', 'false');
        });
      }
    });
  }
});
