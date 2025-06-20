document.addEventListener("DOMContentLoaded", function() {
    console.log("Страница загружена!");
    alert("Ласкаво просимо на сайт Interline!");

    // Добавление стилей для кнопок
    const style = document.createElement('style');
    style.innerHTML = `  
        .product-buttons {  
            display: grid;  
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  
            gap: 20px;  
            margin: 20px 0;  
        }  

        .product-button {  
            display: flex;  
            flex-direction: column;  
            align-items: center;  
            justify-content: center;  
            padding: 20px;  
            background-color: #e0f7fa; /* Цвет фона кнопок */  
            border: 1px solid #00796b; /* Цвет рамки */  
            border-radius: 8px;  
            text-decoration: none;  
            color: #00796b; /* Цвет текста */  
            transition: background-color 0.3s, transform 0.3s;  
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  
        }  

        .product-button:hover {  
            background-color: #b2ebf2; /* Цвет фона при наведении */  
            transform: translateY(-2px); /* Эффект поднятия при наведении */  
        }  

        .product-button i {  
            font-size: 36px; /* Размер иконок */  
            margin-bottom: 10px;  
        }  
    `;
    document.head.appendChild(style);
});