class Person {
    // properties
    health = 100;
    weapon = null;

    // constructor
    constructor(name) {
        this.name = name;
    }

    // methods
    equipWeapon(weapon) {
        this.weapon = weapon;
    }

    attack(person) {
        person.health -= person.weapon.damage;
    }
    
}