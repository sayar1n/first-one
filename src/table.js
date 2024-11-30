document.addEventListener("DOMContentLoaded", () => {
    const practicesTable = document.getElementById("practicesTable").querySelector("tbody");
    const togglePracticesBtn = document.getElementById("togglePracticesBtn");

    // Данные для второго семестра
    const secondSemesterPractices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
    ];

    let isSecondSemester = false;

    togglePracticesBtn.addEventListener("click", () => {
        if (isSecondSemester) {
            // Если второй семестр уже показан, перезагружаем таблицу первого семестра
            location.reload();
            return;
        }

        // Очищаем старую таблицу
        practicesTable.innerHTML = "";

        // Заполняем таблицу данными второго семестра
        secondSemesterPractices.forEach((topic, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${topic}</td>
                <td><input type="checkbox" class="form-check-input"></td>
                <td><input type="checkbox" class="form-check-input"></td>
            `;
            practicesTable.appendChild(row);
        });

        togglePracticesBtn.textContent = "Вернуться к практикам первого семестра";
        isSecondSemester = true;
    });
});