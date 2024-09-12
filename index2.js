// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
 modal.style.display = "block";
}
// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
 modal.style.display = "none";
}
// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
 if (event.target === modal) {
 modal.style.display = "none";
 }
}
// Валидация формы и обработка отправки