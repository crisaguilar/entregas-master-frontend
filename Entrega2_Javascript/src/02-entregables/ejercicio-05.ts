console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {
  coins;
  constructor() {
    this.coins = 0;
  }

  private randomBoolean() {
    return Math.random() < 0.5;
  }

  play() {
    this.coins++;

    const randomBoolean1 = this.randomBoolean();
    const randomBoolean2 = this.randomBoolean();
    const randomBoolean3 = this.randomBoolean();
    if (randomBoolean1 && randomBoolean2 && randomBoolean3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine = new SlothMachine();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
