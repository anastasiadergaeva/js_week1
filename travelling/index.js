let time;
console.log(`Невозможно узнать время поездки: ${time}`)
time = 34;
console.log(`Старт поездки. Осталось минут: ${time}`);
time -= 15;
console.log(`Немного сториз в соцсетях. Осталось минут: ${time}`);
time -= 10;
console.log(`Немного не новостей, но событий. Осталось минут: ${time}`);
time = 0;
console.log(`Оставшееся время: ${time}. Вы приехали. Добро пожаловать в Москву.`);