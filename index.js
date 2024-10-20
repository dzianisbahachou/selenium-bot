const { Builder, By, Key, until } = require('selenium-webdriver');
const { exec } = require('child_process');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // // Переход на сайт
        // await driver.get('http://google.com');

        // // Открытие новой вкладки
        // await driver.executeScript('window.open()');

        // // Получение всех вкладок
        // let tabs = await driver.getAllWindowHandles();

        // // Переключение на новую вкладку
        // await driver.switchTo().window(tabs[1]);

        // Переход на другой сайт в новой вкладке
        await driver.get('https://seo-fast.ru/');

        // Ожидание, пока кнопка появится на странице
        await driver.wait(until.elementLocated(By.className('loginbutton')), 5000);

        // Поиск кнопки по ID
        let button = await driver.findElement(By.className('loginbutton'));

        // Нажатие на кнопку
        await button.click();

        // Поиск всех элементов с классом 'val_m'
        let elements = await driver.findElements(By.className('val_m'));

        // Проверка наличия хотя бы одного элемента
        if (elements.length > 0) {
            // Взаимодействие с первым элементом (например, ввод данных)
            await elements[0].sendKeys('Hello, first element!');
            await elements[1].sendKeys('Hello, second element!');
        } else {
            console.log('Элементы с классом val_m не найдены');
        }

        // Поиск кнопки по ID
        let loginBtn = await driver.findElement(By.className('sf_button'));

        // Нажатие на кнопку
        await loginBtn.click();

        exec('open -a Calculator', (err, stdout, stderr) => {
            if (err) {
                console.error(`Ошибка запуска приложения: ${err}`);
                return;
            }
            console.log('Калькулятор запущен');
        });

    } finally {
        // Закрытие браузера
        // await driver.quit();
    }
})();
