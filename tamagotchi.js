// Create class below

class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  greet = () => console.log(`Hello, I'm ${this.name}`);
  status = () => {
    console.log(
      `energy: ${this.energy}, full:${this.full}, mood: ${this.mood}, sick: ${this.sick}`
    );
  };
  eat = () => {
    this.full += 2;
    this.energy--;
    this.full > 10 ? (this.sick = true) : this.sick;
  };

  medicate = () => {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log("refusal to take medicine");
      this.energy--;
    }
  };
  play = () => {
    if (this.sick) {
      this.mood--;
      this.energy;
    } else {
      this.mood += 2;
      this.energy--;
      this.full--;
    }
  };
  sleep = () => {
    this.energy += 4;
    this.full -= 3;
  };
}
// Do not edit below this line
module.exports = Tamagotchi;
