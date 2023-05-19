const readlineSync = require('readline-sync');
const { theme, newUser } = require('./registration');

function handlerData() {
  for (let i = 0; i < theme.length; i++) {
    const answer = readlineSync.question(`----------------------\n${theme[i][0]}\n`);

    if (answer === theme[i][1]) {
      console.log(' ✓ Это правильный ответ! 🏆 \n');
      newUser.scores += 100;
      newUser.rightAnsw += 1;
      // setTimeout(console.clear, 3000)
    } else {
      newUser.wrongAnsw += 1;
      console.log(` ✗ Ответ не верный! 🤦 Правильный ответ: ${theme[i][1]}\n`);
    }
  }

  console.clear();

  console.log(
    `Вопросы закончились.\n\n📣 ${newUser.name}, Вы набрали ${
      newUser.scores
    } очков из ${theme.length * 100}.\n ✓ Правильных ответов: ${
      newUser.rightAnsw
    }\n ✗ Неправильных ответов: ${newUser.wrongAnsw}`
  );
}

module.exports = handlerData;
