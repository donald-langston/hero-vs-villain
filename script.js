let mainContent = document.getElementById("main-content");

let heroName = prompt("Enter name of the hero");
let villainName = prompt("Enter the name of the villain");
let hero = new Hero("Spider Man");
let villain = new Villain("Green Goblin");
let heroWeapon = new Weapon("Machine Gun");
let villainWeapon = new Weapon("Shotgun");
let heroButton;
let villainButton;

hero.render();
villain.render();
heroListener();
villainListener();





hero.equipWeapon(heroWeapon);
villain.equipWeapon(villainWeapon);

function heroClick() {
    hero.attack(villain);
    villain.render();
    villainListener();
    if(villain.health < 1) {
        villain.render();
        setTimeout(function() {
            alert("Victory!");
            let answer = prompt("Would you like to play again? Enter yes or no");
            if(answer === "yes") {
                hero.health = 100;
                villain.health = 100;
            } else if(answer === "no") {
                heroButton.removeEventListener("click", heroClick);
                villainButton.removeEventListener("click", villainClick);
            }
        },500);
        
        
    }
    console.log(villain);
}

function villainClick() {
    villain.attack(hero);
    hero.render();
    heroListener();
    if(hero.health < 1) {
        hero.render();
        setTimeout(function() {
            alert("Game Over");
            let answer = prompt("Would you like to play again? Enter yes or no");
        if(answer === "yes") {
            hero.health = 100;
            villain.health = 100;
        } else if(answer === "no") {
            heroButton.removeEventListener("click", heroClick);
            villainButton.removeEventListener("click", villainClick);
        }
        }, 500);
        
    }
    console.log(hero);
}

function heroListener() {
    heroButton  = document.getElementById("hero-button");
    heroButton.addEventListener("click", heroClick);
} 
    
function villainListener() {
    villainButton = document.getElementById("villain-button");
    villainButton.addEventListener("click", villainClick);
}
        
    
console.log(hero);
console.log(villain);
    




 
    

    





