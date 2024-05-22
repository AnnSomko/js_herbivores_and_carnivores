/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name,
    this.health = health,
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name),
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health -= 50;

      if (obj.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== obj);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
