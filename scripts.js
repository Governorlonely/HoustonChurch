document.addEventListener('DOMContentLoaded', () => {
  // Универсальная функция для всех элементов с классом .mouse-follow или .nav-link
  const applyMouseEffect = (selector) => {
    document.querySelectorAll(selector).forEach(element => {
      element.addEventListener('mousemove', e => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty('--x', `${x}px`);
        element.style.setProperty('--y', `${y}px`);
      });
    });
  };

  // Запускаем для всех нужных классов
  applyMouseEffect('.mouse-follow');
  applyMouseEffect('.nav-link');
  applyMouseEffect('.form-container');
});

const header = document.querySelector('.header');
const btnSave = document.querySelector('.btn-secondary'); // Кнопка Save Your Spot
const btnJoin = document.querySelector('.btn-primary');   // Кнопка Join the Launch Team

// Сохраняем оригинальный текст, чтобы вернуть его при скролле вверх
const originalSaveText = "Save Your Spot";
const originalJoinText = "Join the Launch Team";

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');

    // Сокращаем текст кнопок
    if (btnSave) btnSave.textContent = "Save";
    if (btnJoin) btnJoin.textContent = "Join";
  } else {
    header.classList.remove('sticky');

    // Возвращаем полный текст
    if (btnSave) btnSave.textContent = originalSaveText;
    if (btnJoin) btnJoin.textContent = originalJoinText;
  }
});