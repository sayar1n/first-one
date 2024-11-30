// Объект для хранения данных формы
document.addEventListener("DOMContentLoaded", () => {
    // Объект для хранения данных формы
    const formData = {
        name: '',
        email: '',
        phone: '',
        date: '',
        comment: '',
        printData: function () {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comment}`);
        }
    };

    // Функция отправки формы
    function submitForm(event) {
        event.preventDefault();

        // Сбор данных из формы
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value.trim();
        const comment = document.getElementById('comment').value.trim();

        // Проверка обязательных полей
        if (!name || !email || !comment) {
            alert('Пожалуйста, заполните обязательные поля: Имя, Почта и Комментарий.');
            return;
        }

        // Проверка номера телефона
        const phoneRegex = /^\d+$/; // Разрешены только цифры
        if (phone && !phoneRegex.test(phone)) {
            alert('Телефон должен содержать только цифры.');
            return;
        }

        // Проверка корректности email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простая проверка email
        if (!emailRegex.test(email)) {
            alert('Введите корректный e-mail.');
            return;
        }

        // Сохранение данных в объект formData
        formData.name = name;
        formData.email = email;
        formData.phone = phone;
        formData.date = date;
        formData.comment = comment;

        // Печать данных в консоль
        formData.printData();

        // Сообщение об успешной отправке
        const successMessage = document.getElementById('success-message');

        successMessage.textContent = "Форма успешно отправлена!";
        successMessage.style.display = "block";
        successMessage.classList.add('fade-in'); // Добавляем класс для анимации

        // Скрываем сообщение через 3 секунды
        setTimeout(() => {
            successMessage.style.display = "none";
            successMessage.classList.remove('fade-in'); // Убираем класс анимации
        }, 3000);

        // Закрыть модальное окно (если используется модалка)
        closeModal();
    }

    // Функции для работы с модальным окном
    window.openModal = function () {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.add('show');
            modal.style.display = 'block';
        }
    };

    window.closeModal = function () {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.remove('show');
            modal.style.display = 'none';
        }
    };

    // Добавление обработчика отправки формы
    const form = document.getElementById('service-form');
    if (form) {
        form.addEventListener('submit', submitForm);
    } else {
        console.error("Форма не найдена.");
    }
});


///////// Практика 14 /////////

// Обработчик события для формы
document.addEventListener('DOMContentLoaded', () => {
    const practiceForm = document.getElementById('service-form');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-popup');
    document.body.appendChild(messageContainer);

    if (practiceForm) {
        practiceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            messageContainer.textContent = 'Форма отправлена!';
            messageContainer.classList.add('success', 'show');
            
            // Анимация изменения цвета
            setTimeout(() => {
                messageContainer.classList.remove('success');
                messageContainer.classList.add('info');
            }, 500);
            
            setTimeout(() => {
                messageContainer.classList.remove('show');
            }, 4000);
        });
    }
});
