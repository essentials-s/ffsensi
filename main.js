document.addEventListener('DOMContentLoaded', () => {
    // Список моделей (можно расширять)
    const devices = [
        "iPhone 16 Pro Max", "iPhone 15 Pro", "iPhone 13", 
        "Samsung Galaxy S24 Ultra", "Samsung A55", "POCO X6 Pro", 
        "Redmi Note 13 Pro", "Xiaomi 14 Ultra", "OnePlus 12"
    ];

    const input = document.querySelector('#deviceName');
    const playstyleButtons = document.querySelectorAll('.grid button');
    const generateBtn = document.querySelector('button[type="submit"]');

    // 1. Логика выбора стиля игры (Playstyle)
    playstyleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем активный класс у всех
            playstyleButtons.forEach(b => {
                b.classList.remove('active-option', 'border-primary/50', 'bg-primary/10', 'ring-1');
                b.classList.add('border-border/50', 'bg-card/30');
            });
            // Добавляем нажатому
            btn.classList.add('active-option');
        });
    });

    // 2. Логика кнопки "Detect" (Автозаполнение)
    const detectBtn = document.querySelector('button:has(.lucide-search)');
    detectBtn.addEventListener('click', () => {
        const randomDevice = devices[Math.floor(Math.random() * devices.length)];
        input.value = randomDevice;
        input.classList.add('border-primary');
        setTimeout(() => input.classList.remove('border-primary'), 1000);
    });

    // 3. Финальный футер с твоей почтой (динамическое добавление)
    const footer = document.querySelector('footer p');
    footer.innerHTML = `
        FF Sensitivity Generator • Designed by: <b>Esbergen Erdaulet</b><br>
        Support: <a href="mailto:esbergenerdaulet777@gmail.com" class="text-primary hover:underline">esbergenerdaulet777@gmail.com</a>
    `;

    // 4. Эффект генерации
    generateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(!input.value) return alert("Please enter device name!");
        
        generateBtn.innerHTML = "Generating...";
        setTimeout(() => {
            generateBtn.innerHTML = "✨ Done!";
            alert(`Settings generated for ${input.value}! Check your Training Ground.`);
            generateBtn.innerHTML = "Generate Sensitivity";
        }, 1500);
    });
});
