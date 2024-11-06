// Функция для открытия модального окна
function openModal(serviceType) {
    document.getElementById('modal').style.display = "flex";
    document.getElementById("serviceType").value = serviceType;
}
// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('error-messages').innerHTML = '';
    document.getElementById('service-form').reset();
}

// Функция для проверки формы перед отправкой
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var country = document.getElementById('country').value;

    var errors = [];

    // Проверяем каждое поле
    if (name === '') {
        errors.push('Пожалуйста, введите ваше имя.');
    }

    if (email === '') {
        errors.push('Пожалуйста, введите ваш email.');
    }

    if (phone === '') {
        errors.push('Пожалуйста, введите ваш номер телефона.');
    }

    if (country === '') {
        errors.push('Пожалуйста, выберите страну.');
    }

    // Если есть ошибки, показываем их
    if (errors.length > 0) {
        var errorContainer = document.getElementById('error-messages');
        errorContainer.innerHTML = errors.join('<br>');
        return false; // Останавливаем отправку формы
    } else {
        // Если ошибок нет, перенаправляем на страницу подтверждения
        window.location.href = 'form.html';
        return false;
    }
}

function formatPhoneNumber(input) {
    var cleanedInput = input.replace(/\D/g, '');

    cleanedInput = cleanedInput.substring(0, 11);

    // Форматируем номер
    var formattedNumber = '';
    if (cleanedInput.length > 0) {
        formattedNumber += '+7 ';
    }
    if (cleanedInput.length > 1) {
        formattedNumber += '(' + cleanedInput.substring(1, 4);
    }
    if (cleanedInput.length > 4) {
        formattedNumber += ') ' + cleanedInput.substring(4, 7);
    }
    if (cleanedInput.length > 7) {
        formattedNumber += '-' + cleanedInput.substring(7, 9);
    }
    if (cleanedInput.length > 9) {
        formattedNumber += '-' + cleanedInput.substring(9);
    }

    return formattedNumber;
}

function handlePhoneInput(event) {
    var input = event.target;
    var formattedNumber = formatPhoneNumber(input.value);
    input.value = formattedNumber;
}

document.addEventListener('DOMContentLoaded', function () {
    var phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', handlePhoneInput);
});
