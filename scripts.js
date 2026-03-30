document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const navList = document.querySelector('.nav-list');
  const menuBtn = document.querySelector('.menu-btn');
  const headerActions = document.querySelector('.header-actions');

  // 1. Перенос кнопок (только если мы на мобилке и они еще не там)
  const moveButtons = () => {
    if (window.innerWidth <= 768 && headerActions) {
      const btns = headerActions.querySelectorAll('.btn');
      btns.forEach(btn => navList.appendChild(btn));
    }
  };

  // 2. Логика Бургера
  const toggleMenu = () => {
    const isActive = navList.classList.toggle('active');
    menuBtn.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
  };

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  }

  // Закрытие при клике на ссылки
  navList.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link') || e.target.classList.contains('btn')) {
      navList.classList.remove('active');
      menuBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // 3. Смена текста при скролле (Sticky)
  window.addEventListener('scroll', () => {
    const isSticky = window.scrollY > 50;
    header.classList.toggle('sticky', isSticky);

    const btnSave = document.querySelector('.btn-secondary');
    const btnJoin = document.querySelector('.btn-primary');

    if (btnSave) btnSave.textContent = isSticky ? "Save" : "Save Your Spot";
    if (btnJoin) btnJoin.textContent = isSticky ? "Join" : "Join the Launch Team";
  });

  // 4. Эффект фонарика
  document.addEventListener('mousemove', e => {
    const targets = document.querySelectorAll('.nav-link, .belonging-card, .btn, .form-container');
    targets.forEach(t => {
      const rect = t.getBoundingClientRect();
      t.style.setProperty('--x', `${e.clientX - rect.left}px`);
      t.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
  });

  moveButtons();
});