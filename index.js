// Import stylesheets
import './style.css';

// Write Javascript code!
class CreateLIItems {
  constructor(name) {
    this.name = name;
    const listEl = document.createElement('li');
    listEl.textContent = name;
    const parentUL = document.querySelector('#names');
    parentUL.appendChild(listEl);
  }
}

class NameGenerator {
  constructor() {
    this.names = ['VHS', 'Virat', 'Tom Cruise'];
    this.currentNameIdx = 0;
    const btn = document.querySelector('#submit');
    console.log(this);
    btn.addEventListener('click', () => {
      this.addName();
    });
  }

  // Arrow fucntions as callback will always have the reference of this. Hence though btn event listener is calling the addName() method still 'this' in addName refers to the NameGenerator class. This is the advantage of Arrow functions. In case of normal functions it is not the case.

  addName() {
    console.log(this);
    const name = this.names[this.currentNameIdx];
    new CreateLIItems(name);
    this.currentNameIdx++;
    if (this.currentNameIdx >= this.names.length) {
      this.currentNameIdx = 0;
    }
  }
}

new NameGenerator();
