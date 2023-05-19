const readlineSync = require('readline-sync');
const User = require('./User');

function registrateUser() {
  console.clear();
  const userName = readlineSync.question('Введи своё имя: ');
  const newUser = new User(userName);
  console.clear();
  const chosenTheme = readlineSync.question(
    `Привет, ${newUser.name}! Выбери тему:

    1. Nighthawk
    2. Otter
    3. Raccoon
    
    `
  );
}
registrateUser();
