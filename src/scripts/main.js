'use strict';

const phoneIcon = document.querySelector('.icon--phone-call');

if (phoneIcon) {
  phoneIcon.addEventListener('click', (event) => {
    event.preventDefault();

    // додаємо клас активності (збільшення)
    phoneIcon.classList.add('icon--phone-call--active');

    // через 3 секунди прибираємо клас
    setTimeout(() => {
      phoneIcon.classList.remove('icon--phone-call--active');
    }, 3000);
  });
}

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', (event) => {
  event.preventDefault();
  menu.classList.toggle('page__menu--active');
  burger.classList.toggle('icon--close');
  burger.classList.toggle('icon--burger-menu');
});

document.querySelector('.browse__button').addEventListener('click', () => {
  document.querySelector('.categories').style.display = 'block';
});

const footerForm = document.querySelector('.footer__form');

if (footerForm) {
  footerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = this.querySelector('.footer__button');
    const originalText = submitBtn.textContent; // Зберігаємо "SEND"

    // 1. Очищуємо поля форми
    this.reset();

    // 2. Знімаємо фокус, щоб прибрати "темний" стан
    submitBtn.blur();

    // 3. Міняємо текст на кнопці
    submitBtn.textContent = 'Ваше повідомлення відправлено!';

    // Блокуємо кнопку, щоб користувач не натискав багато разів під час паузи
    submitBtn.disabled = true;

    // 4. Через 3 секунди повертаємо все назад
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 3000);
  });
}
