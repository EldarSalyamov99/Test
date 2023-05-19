const readlineSync = require('readline-sync');
const User = require('./User');

function registrateUser() {
  console.clear();
  const userName = readlineSync.question('Введите своё имя: ');
  const newUser = new User(userName);
  console.clear();
  let chosenTheme = readlineSync.question(
    `Здравствуйте, ${newUser.name}! Выберите номер темы:

    1. Nighthawk
    2. Otter
    3. Raccoon
    
    `
  );

  console.clear();

  switch (chosenTheme) {
    case '1':
      chosenTheme = './topics/nighthawk_flashcard_data.txt';
      break;

    case '2':
      chosenTheme = './topics/otter_flashcard_data.txt';
      break;

    case '3':
      chosenTheme = './topics/raccoon_flashcard_data.txt';
      break;

    default:
      console.log(`Темы под номером "${chosenTheme}" не существует!`);
      break;
  }
}
registrateUser();
