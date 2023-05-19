class User {
  constructor(name = 'sadasd', scores = 0, rightAnsw = 0, wrongAnsw = 0) {
    this.name = name;
    this.scores = scores;
    this.rightAnsw = rightAnsw;
    this.wrongAnsw = wrongAnsw;
  }
}

module.exports = User;
