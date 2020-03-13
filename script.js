let mainContent = document.getElementById("main-content");

let heroName = prompt("Enter name of the hero");
let villainName = prompt("Enter the name of the villain");
const hero = new Hero("Spider Man");
const villain = new Villain("Green Goblin");

let heroContent = hero.render();
let villainContent = villain.render();

mainContent.insertAdjacentHTML("afterbegin", heroContent);
mainContent.insertAdjacentHTML("beforeend", villainContent);

