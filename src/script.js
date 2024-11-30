/////////////// Практика 11 ///////////////

// 1. Изменение текста H1
const h1 = document.querySelector("h1");
if (h1) {
    h1.textContent = "Добро пожаловать на наш сайт!";
}

// 2. Изменение цвета текста H2
const h2 = document.querySelector("h2");
if (h2) {
    h2.style.color = "red";
}

// 3. Изменение текста первого параграфа
const firstParagraph = document.querySelector("p");
if (firstParagraph) {
    firstParagraph.textContent = "Это новый текст параграфа.";
}

// 4. Скрытие встроенного видео (если оно существует)
const video = document.querySelector("iframe, video");
if (video) {
    video.style.display = "none";
}


/////////////// Практика 12 ///////////////

// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

// Функция для извлечения параметра utm_term из URL и изменения текста H1
function updateH1FromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');
    if (utmTerm && h1) {
        h1.textContent = utmTerm;
    }
}

// Функция для вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0]; // Формат "ЧЧ:ММ:СС"
    console.log(timeString);
}

// Функция для сброса цвета фона к исходному значению
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Вызовы функций
showMessage("Скрипт загружен!");
logCurrentTime();
document.addEventListener('DOMContentLoaded', () => {
    resetBackgroundColor();
    changeBackgroundColor("#dfb9f5");
    toggleVisibility('.content');
    updateH1FromURL();
});

/////////////// Практика 13 ///////////////

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('h1');
    if (header) {
        header.addEventListener('click', () => {
            alert("Вы кликнули на заголовок - так держать!");
        });
    }

    // Обработчик событий для фотографии
    const studentPhoto = document.querySelector('.cat_user'); // Предполагается, что у фотографии студента есть класс 'student-photo'
    if (studentPhoto) {
        studentPhoto.addEventListener('mouseover', () => {
            studentPhoto.style.width = '30%';
            studentPhoto.style.height = '30%';
        });

        // Восстановление размера при уходе мыши
        studentPhoto.addEventListener('mouseout', () => {
            studentPhoto.style.width = '';
            studentPhoto.style.height = '';
        });

        // Замена фотографии на фотографию любимого преподавателя при клике
        studentPhoto.addEventListener('click', () => {
            studentPhoto.src = './src/images/mirror.jpg'; 
        });

        studentPhoto.addEventListener('dblclick', () => {
            alert("Не налегай, у меня не так много любимых преподавателей");
        });
    }
});
