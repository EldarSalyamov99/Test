const readlineSync = require('readline-sync');
const { theme, newUser } = require('./registration');
const User = require('./User');

for (let i = 0; i < theme.length; i++) { 
    
  const answer = readlineSync.question(`\n${theme[i][0]}\n`);
//   console.log(answer);
  if (answer === theme[i][1]) {
    console.log('Это правильный ответ!');
    newUser.scores += 100
    newUser.rightAnsw += 1
    // setTimeout(console.clear, 3000)
  } else {
    newUser.wrongAnsw += 1
    console.log(`Ответ не верный!\n Правильный ответ: ${theme[i][1]}\n`)
  }
  
}console.clear()
console.log(`Вопросы закончились.\n\nВы набрали ${newUser.scores} очков из ${theme.length*100}.\nПравильных ответов: ${newUser.rightAnsw}\nНеправильных ответов: ${newUser.wrongAnsw}`);

