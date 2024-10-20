// This file contains usefull methods to use in specs

// Переход на сайт
await driver.get('http://google.com');

// Открытие новой вкладки
await driver.executeScript('window.open()');

// Получение всех вкладок
let tabs = await driver.getAllWindowHandles();

// Переключение на новую вкладку
await driver.switchTo().window(tabs[1]);

// Закрытие текущей (второй) вкладки
await driver.close();

// Переключение обратно на первую вкладку
await driver.switchTo().window(tabs[0]);

// Закрытие браузера
await driver.quit();
