// Ждем полной загрузки страницы
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const modal = document.getElementById("modal");
    const closeModalButton = document.querySelector(".close");
    const openModalButtons = document.querySelectorAll(".openModal");

    // Открытие модального окна при нажатии на кнопку "Заказать"
    openModalButtons.forEach(button => {
        button.addEventListener("click", function() {
            modal.style.display = "block"; // Показываем модальное окно
        });
    });

    // Закрытие модального окна по нажатию на кнопку "x"
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none"; // Скрываем модальное окно
    });

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Скрываем модальное окно
        }
    });

    // Отправка формы
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы
        
        // Здесь можно добавить логику отправки формы на сервер через AJAX, если нужно

        // Показать сообщение об успешной отправке формы
        alert("Спасибо за отправку формы!");

        // Очистить форму после отправки
        form.reset();

        // Закрыть модальное окно
        modal.style.display = "none";
    });
});
