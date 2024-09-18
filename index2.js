// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeModalBtn = document.querySelector(".close");

// Находим все кнопки с классом "openModal"
const orderButtons = document.querySelectorAll(".openModal");

// Добавляем обработчик на каждую кнопку "Заказать"
orderButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const serviceName = button.getAttribute("data-service"); // Получаем название услуги
        modalTitle.textContent = `Заказать ${serviceName}`; // Устанавливаем название в модальное окно
        modal.style.display = "block"; // Открываем модальное окно
    });
});

// Закрываем модальное окно при нажатии на "X"
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрываем модальное окно при клике вне его области
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
