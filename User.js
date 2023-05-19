class User {
  constructor(name = 'Anonimus', scores = 0, rightAnsw = 0, wrongAnsw = 0) {
    this.name = name;
    this.scores = scores;
    this.rightAnsw = rightAnsw;
    this.wrongAnsw = wrongAnsw;
  }
}

module.exports = User;
